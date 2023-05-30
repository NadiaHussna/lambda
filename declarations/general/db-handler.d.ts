declare interface IQuery {
  KeyConditionExpression?: string
  IndexName?: string
  FilterExpression?: string
  ScanIndexForward?: boolean
  AttributesToGet?: string
  ProjectionExpression?: string
  ExpressionAttributeNames?: IAny
  ExpressionAttributeValues?: IAny
  Limit?: number
  Select?: string
  TableName?: string
  Key?: Record<string, string>
}
