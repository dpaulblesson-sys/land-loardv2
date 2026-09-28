import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { MinioModule } from './minio/minio.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';
import { VerificationModule } from './verification/verification.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    MinioModule,
    AuthModule,
    UsersModule,
    PropertiesModule,
    VerificationModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
