import { Controller, Post, Get, Param, UseGuards, UploadedFile, UseInterceptors, Body, NotFoundException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role, PropertyMedia } from '@prisma/client';
import { MinioService } from '../minio/minio.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMediaDto } from './property-media.dto';
import { v4 as uuidv4 } from 'uuid';

@Controller('properties/:propertyId/media')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PropertyMediaController {
  constructor(
    private readonly minioService: MinioService,
    private readonly prisma: PrismaService,
  ) {}

  // Upload media file
  @Post()
  @Roles(Role.SELLER, Role.ADMIN)
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @Param('propertyId') propertyId: string,
    @UploadedFile() file: any,
    @Body() dto: CreateMediaDto,
  ): Promise<PropertyMedia> {
    const property = await this.prisma.property.findUnique({ where: { id: propertyId } });
    if (!property) {
      throw new NotFoundException('Property not found');
    }

    const uniqueId = uuidv4();
    const objectKey = `${propertyId}/${uniqueId}_${file.originalname}`;
    await this.minioService.upload('property-media', objectKey, file.buffer, file.mimetype);

    return this.prisma.propertyMedia.create({
      data: {
        propertyId,
        type: dto.type,
        url: `${this.minioService.getPublicUrl('property-media', objectKey)}`,
        isPrimary: dto.isPrimary ?? false,
      },
    });
  }

  // List media for a property
  @Get()
  async list(@Param('propertyId') propertyId: string): Promise<PropertyMedia[]> {
    return this.prisma.propertyMedia.findMany({ where: { propertyId } });
  }
}
