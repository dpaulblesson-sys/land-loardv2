import { PropertyMedia } from '@prisma/client';
import { MinioService } from '../minio/minio.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMediaDto } from './property-media.dto';
export declare class PropertyMediaController {
    private readonly minioService;
    private readonly prisma;
    constructor(minioService: MinioService, prisma: PrismaService);
    upload(propertyId: string, file: any, dto: CreateMediaDto): Promise<PropertyMedia>;
    list(propertyId: string): Promise<PropertyMedia[]>;
}
