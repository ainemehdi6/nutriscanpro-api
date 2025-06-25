import { createApp } from './main';
import serverlessExpress from '@vendia/serverless-express';
import { APIGatewayProxyEvent, Context, Callback, APIGatewayProxyResult } from 'aws-lambda';

let server: ReturnType<typeof serverlessExpress>;

export default async function handler(
  req: APIGatewayProxyEvent,
  res: Context,
  callback: Callback<APIGatewayProxyResult>
) {
  if (!server) {
    const expressApp = await createApp();
    server = serverlessExpress({ app: expressApp });
  }

  return server(req, res, callback);
}
