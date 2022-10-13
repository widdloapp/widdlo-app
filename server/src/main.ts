import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {ValidationPipe} from "@nestjs/common";
import {NestExpressApplication} from "@nestjs/platform-express";

async function start() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.setGlobalPrefix('api/v1');
  app.disable('x-powered-by')
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));


  const config = new DocumentBuilder()
      .setTitle('Widdlo API')
      .setBasePath('api/v1')
      .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3004);
}

start().catch(error => console.log(error))