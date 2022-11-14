import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';
/**
 * Dos servicio uno para localhost, prod
 */
import { LambdaService } from './lambda/lambda.service';
// import { NotLambdaService as LambdaService } from './not-lambda/not-lambda.service'; //TODO es buffer base64

/**
 * AWS  Lambda provee los argumentos
 * @param event 
 * @param context 
 * @param callback 
 * @returns 
 */
export const handler: Handler = async (event: any,context: Context,callback: Callback) => {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const appService = appContext.get(LambdaService);

  const buff = Buffer.from(event.body, "base64");
  const requestString = buff.toString('utf-8');
  const request = JSON.parse(requestString);

  // const request = JSON.parse(event.body) //TODO es buffer base64

  return {
    body: await appService.buildPdf(request), //TODO es buffer base64
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-type': 'application/pdf',
    },
    isBase64Encoded: true,
    statusCode: HttpStatus.OK,
  };
};
