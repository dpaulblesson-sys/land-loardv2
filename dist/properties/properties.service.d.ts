import { PrismaService } from '../prisma/prisma.service';
import { Property } from '@prisma/client';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
export declare class PropertiesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(sellerId: string, dto: CreatePropertyDto): Promise<Property>;
    findAll(filters?: any): Promise<Property[]>;
    findOne(id: string): Promise<Property>;
    update(id: string, dto: UpdatePropertyDto): Promise<Property>;
    remove(id: string): Promise<Property>;
}
