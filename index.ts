/* eslint-disable prefer-spread */
/* eslint-disable import/no-mutable-exports */
import * as dotenv from 'dotenv'
import { isEmpty } from 'lodash'

import { _getUserDetails } from './src/generics/aws-service'
import { accessLog, initialLog } from './src/middleware/response-handler'
import { _errorConstant, _handler, fw, garbageCollector, garbageSorter } from './src/middleware/wrapper'
import { AuthReq, Resolvers } from './src/routes'
import { EM } from './src/static/error-message'
import { runMockExport } from './tests/mock/database/export.mock'
import { _getLockAttempts } from './utils/db-common'
import { ENV_SETTINGS } from './utils/env-settings'
import { _formatParamLog, parseValue } from './utils/helpers/formatter'
import { validateJWT, validateKey } from './utils/helpers/validator-helper'
import { _getEncryptionKey, _getIpAddress } from './utils/util'

dotenv.config()

const OVERRIDE = process.env.OVERRIDE
let ENV = process.env.ENV ? process.env.ENV : 'LOCAL'
if (OVERRIDE !== undefined && !['LOCAL', 'TEST'].includes(ENV)) ENV = 'LOCAL'
const { IP_LOCK_ATTEMPT } = ENV_SETTINGS[ENV]

export let globalIpAddress: string
export let globalUsername: string
export let globalAccessId: string
export let globalEndpoint: string

const _clearGlobalIndex = () => {
  globalIpAddress = ''
  globalUsername = ''
  globalAccessId = ''
  globalEndpoint = ''
}

export const handler = async (event: IAny): Promise<unknown> => {
  let modifiedArgs
  try {
    // SECTION: Test Export section
    if (['TEST'].includes(ENV) && event.isMockExport) await _handler(runMockExport(event))
    let reqDetail: IAny
    if (['LOCAL', 'TEST'].includes(ENV) && OVERRIDE === undefined) {
      const parsed = JSON.parse(event.body)
      reqDetail = parsed
    } else reqDetail = parseValue(event)

    const { TypeName = null, FieldName = null, Header = null, Arguments = null, Identity = null } = { ...reqDetail }
    modifiedArgs = { ...Arguments, TypeName }

    // 1. Extracting header info
    // deviceToken
    // const deviceReq = ['login']
    // if (deviceReq.includes(FieldName)) modifiedArgs.deviceToken = _getDeviceToken(Header)
    // encryptionKey
    const encryptReq = ['changepassword', 'resetpassword', 'login']
    if (encryptReq.includes(FieldName)) modifiedArgs.encryptionKey = _getEncryptionKey(Header)
    // ip
    if (Header) modifiedArgs.ip = _getIpAddress(Header)

    // Set globals
    globalUsername = 'anonymous'
    globalIpAddress = modifiedArgs.ip
    globalEndpoint = FieldName

    // adding info before any await was called
    const infoIp = `\nIP: [${globalIpAddress}]`
    const infoUsername = `USERNAME: ${globalUsername}`
    const infoRoutes = `ROUTES: ${TypeName}:${globalEndpoint}`
    const inputJson = _formatParamLog(Arguments, FieldName)
    modifiedArgs.infoLog = [infoIp, infoUsername, infoRoutes, '\nPARAMETERS', inputJson]

    // 2. First access log
    globalAccessId = (await _handler(initialLog(globalIpAddress, globalUsername, TypeName, FieldName, Arguments))).d

    // 3. Identity check
    if (['LOCAL', 'TEST'].includes(ENV)) {
      if (AuthReq.includes(FieldName) && ENV === 'LOCAL') {
        const jwtResult = await _handler(validateJWT(Header))
        modifiedArgs = { ...modifiedArgs, ...jwtResult.d }
      } else modifiedArgs.username = reqDetail.mockUsername
    } else {
      const cognitoAuthType = Identity.cognitoIdentityAuthType
      if (isEmpty(cognitoAuthType)) throw <ICustomError>{ errKey: EM.default, desc: 'cognitoIdentityAuthType' }
      if (cognitoAuthType != 'unauthenticated') {
        const userInfo = Identity.cognitoIdentityAuthProvider.split(':')[2]
        const result = await _handler(_getUserDetails(userInfo.replace('"', '')))
        if (typeof result.d === 'string') modifiedArgs = { ...modifiedArgs, username: result.d }
      } else modifiedArgs.identityId = Identity.cognitoIdentityId
    }

    // 4. Obtained username (from verification or input)
    globalUsername = modifiedArgs.username
    if (!globalUsername && validateKey(modifiedArgs, 'input')) {
      const { username } = modifiedArgs.input
      if (username) globalUsername = username
      modifiedArgs.username = globalUsername
    }
    // Temporary code for the login USERNAME
    if (FieldName == 'login') globalUsername = modifiedArgs.input.username

    modifiedArgs.infoLog[1] = `USERNAME: ${globalUsername}` // reassigning found username here

    // 5. Actual access log (after identity verification)
    await _handler(accessLog(globalIpAddress, globalUsername, TypeName, FieldName, Arguments))
    const lockAttempt = (await _handler(_getLockAttempts(globalIpAddress))).d
    if (!isEmpty(lockAttempt)) {
      if (lockAttempt[0].retries == IP_LOCK_ATTEMPT && !['enableagent', 'verifyotpagent'].includes(FieldName))
        throw <ICustomError>{ errKey: EM.IpLockException, desc: '_getLockAttempts' }
    }

    // 6. TypeName check
    const typeResolver = Resolvers[TypeName as keyof typeof Resolvers]
    if (!typeResolver) throw <ICustomError>{ errKey: EM.RouteNotFound, desc: 'typeResolver' }

    // 7. Resolver check
    type fn = (Arguments: Record<string, unknown>, Header?: Record<string, unknown>) => Promise<IAny>
    const fieldResolver: fn = typeResolver[FieldName as keyof typeof typeResolver]
    if (!fieldResolver) throw <ICustomError>{ errKey: EM.RouteNotFound, desc: 'fieldResolver' }

    // 8. Call endpoint
    const result = (await _handler(fw(fieldResolver, modifiedArgs))).d

    // 9. Return right results
    if (typeof result === 'string') {
      _clearGlobalIndex()
      return { body: { error: JSON.parse(result) } }
    }

    // NOTE: For userLogin
    if (result.errMessage !== undefined) {
      _clearGlobalIndex()
      const error = JSON.parse(result.errMessage)
      return { body: { data: { result: { email: result.email } }, error } }
    }

    return { body: { data: { result: result } } }
  } catch (err) {
    if (ENV === 'TEST' && event.isMockExport) console.error(err)
    else {
      if (modifiedArgs.infoLog) console.info.apply(console, modifiedArgs.infoLog)
      const errLog = _errorConstant({ ip: globalIpAddress, username: globalUsername }, `${globalEndpoint}(i)`)
      errLog.error = garbageSorter(`${globalEndpoint}(i)`, err)
      const finalError = await garbageCollector(errLog)
      _clearGlobalIndex()
      return <unknown>{ body: { data: null, error: JSON.parse(finalError) } }
    }
  }
}
