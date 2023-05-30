const {
  log,
  sendErr,
  sendOutput,
  installExceptionHandlers,
} = require('./lambda/util');

process.once(
  'message',
  async ({ module, handlerPath, handlerMethod, payload }) => {
    try {
      log.info('load', module);
      // eslint-disable-next-line
      const handlerModule = require(module);
      if (!handlerModule[handlerMethod]) {
        throw new Error(
          `Module : ${handlerPath} does not have export: ${handlerMethod}`,
        );
      }

      log.info('invoke', handlerMethod);
      const lambda = handlerModule[handlerMethod];
      /**
       * 
       * === CUSTOM UPDATE: @conduitvc/appsync-emulator-serverless@0.14.5 ===
       * NOTE: Added context value
       * 
       */
      const context = {
        functionVersion: '$LATEST',
        functionName: 'LOCAL',
        memoryLimitInMB: '10240',
        logGroupName: '/aws/lambda/LOCAL',
        logStreamName: '2021/03/29/[$LATEST]9b6629f142e14852a8e6323cc435f03b',
        clientContext: undefined,
        identity: undefined,
        invokedFunctionArn: 'arn:aws:lambda:ap-southeast-1:946737411435:function:LOCAL',
        awsRequestId: '6d0957ea-c3fd-4559-ba09-e28df3d58825'
      };
      /**
       * 
       * === CUSTOM UPDATE: @conduitvc/appsync-emulator-serverless@0.14.5 ===
       * NOTE: Added try catch for schema error
       * 
       */
      const lambdaResult = lambda(payload, context, (err, callbackResult) => {
        if (err) {
          sendErr(err);
        } else {
          sendOutput(callbackResult);
        }
      });
      if (lambdaResult instanceof Promise) {
        sendOutput(await lambdaResult);
      }
    } catch (err) {
      log.error(err);
      sendErr(err);
    }
  },
);

installExceptionHandlers();
