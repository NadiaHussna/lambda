/**
 * Contains all types and interfaces from modules
 */
// aws-sdk
declare type AWSError = import('aws-sdk').AWSError

// aws-sdk/clients/dynamodb
declare type DocumentClient = import('aws-sdk/clients/dynamodb').DocumentClient
declare type ClientConfiguration = import('aws-sdk/clients/dynamodb').ClientConfiguration
declare type PutItemInput = import('aws-sdk/clients/dynamodb').PutItemInput
declare type PutItemOutput = import('aws-sdk/clients/dynamodb').PutItemOutput
declare type BatchGetItemInput = import('aws-sdk/clients/dynamodb').BatchGetItemInput
declare type BatchGetItemOutput = import('aws-sdk/clients/dynamodb').BatchGetItemOutput
declare type GetItemInput = import('aws-sdk/clients/dynamodb').GetItemInput
declare type GetItemOutput = import('aws-sdk/clients/dynamodb').GetItemOutput
declare type QueryInput = import('aws-sdk/clients/dynamodb').QueryInput
declare type QueryOutput = import('aws-sdk/clients/dynamodb').QueryOutput
declare type UpdateItemInput = import('aws-sdk/clients/dynamodb').UpdateItemInput
declare type UpdateItemOutput = import('aws-sdk/clients/dynamodb').UpdateItemOutput
declare type DeleteItemInput = import('aws-sdk/clients/dynamodb').DeleteItemInput
declare type DeleteItemOutput = import('aws-sdk/clients/dynamodb').DeleteItemOutput

// mysql
declare type ConnectionConfig = import('mysql').ConnectionConfig
declare type Connection = import('mysql').Connection
declare type MysqlError = import('mysql').MysqlError
declare type Query = import('mysql').Query
declare type OkPacket = import('mysql').OkPacket

// aws-sdk/clients/cognitoidentityserviceprovider
declare type AdminGetUserRequest = import('aws-sdk/clients/cognitoidentityserviceprovider').AdminGetUserRequest
declare type AdminGetUserResponse = import('aws-sdk/clients/cognitoidentityserviceprovider').AdminGetUserResponse
declare type ConfirmSignUpRequest = import('aws-sdk/clients/cognitoidentityserviceprovider').ConfirmSignUpRequest
declare type AdminSetUserPasswordRequest = import('aws-sdk/clients/cognitoidentityserviceprovider').AdminSetUserPasswordRequest

// fs
declare type PathLike = import('fs').PathLike
