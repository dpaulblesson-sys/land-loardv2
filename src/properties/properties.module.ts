import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { PropertyMediaController } from './property-media.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MinioModule } from '../minio/minio.module';

@Module({
  imports: [PrismaModule, MinioModule],
  controllers: [PropertiesController, PropertyMediaController],
  providers: [PropertiesService],
  exports: [PropertiesService],
})
export class PropertiesModule {}
