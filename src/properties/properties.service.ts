import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Property } from '@prisma/client';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(sellerId: string, dto: CreatePropertyDto): Promise<Property> {
    const data: Prisma.PropertyCreateInput = {
      seller: { connect: { id: sellerId } },
      title: dto.title,
      slug: dto.slug,
      description: dto.description,
      propertyType: dto.propertyType,
      listingType: dto.listingType,
      price: dto.price,
      currency: dto.currency ?? 'INR',
      negotiable: dto.negotiable ?? false,
      status: 'DRAFT',
      bedrooms: dto.bedrooms,
      bathrooms: dto.bathrooms,
      balconies: dto.balconies,
      floor: dto.floor,
      totalFloors: dto.totalFloors,
      builtUpArea: dto.builtUpArea,
      carpetArea: dto.carpetArea,
      landArea: dto.landArea,
      parking: dto.parking,
      furnishing: dto.furnishing,
      propertyAge: dto.propertyAge,
    };
    return this.prisma.property.create({ data });
  }

  async findAll(filters?: any): Promise<Property[]> {
    // Simple filtering stub – extend later
    return this.prisma.property.findMany({ where: { status: 'VERIFIED' } });
  }

  async findOne(id: string): Promise<Property> {
    const property = await this.prisma.property.findUnique({ where: { id } });
    if (!property) throw new NotFoundException('Property not found');
    return property;
  }

  async update(id: string, dto: UpdatePropertyDto): Promise<Property> {
    return this.prisma.property.update({ where: { id }, data: dto });
  }

  async remove(id: string): Promise<Property> {
    return this.prisma.property.delete({ where: { id } });
  }
}
