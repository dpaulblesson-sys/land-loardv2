import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(cookieParser());

  // Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('LAND LORD API')
    .setDescription('Real-estate direct marketplace and verification platform')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? 3000;
  await app.listen(port);
  console.log(`🚀 LAND LORD Server running at http://localhost:${port}`);
  console.log(`📑 Swagger Documentation available at http://localhost:${port}/docs`);
}
bootstrap();
