import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MinioService } from './minio.service';
import * as Minio from 'minio';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'MINIO_CLIENT',
      useFactory: (config: ConfigService) => {
        return new Minio.Client({
          endPoint: config.get<string>('MINIO_ENDPOINT'),
          port: parseInt(config.get<string>('MINIO_PORT') ?? '9000', 10),
          useSSL: config.get<string>('MINIO_SSL') === 'true',
          accessKey: config.get<string>('MINIO_ACCESS_KEY'),
          secretKey: config.get<string>('MINIO_SECRET_KEY'),
        });
      },
      inject: [ConfigService],
    },
    MinioService,
  ],
  exports: ['MINIO_CLIENT', MinioService],
})
export class MinioModule {}
