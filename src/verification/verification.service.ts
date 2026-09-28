import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PropertyVerification } from '@prisma/client';
import { UpdateVerificationDto } from './dto/update-verification.dto';

@Injectable()
export class VerificationService {
  constructor(private readonly prisma: PrismaService) {}

  async getByPropertyId(propertyId: string): Promise<PropertyVerification> {
    const verification = await this.prisma.propertyVerification.findFirst({
      where: { propertyId },
    });
    if (!verification) throw new NotFoundException('Verification not found');
    return verification;
  }

  async updateStatus(propertyId: string, dto: UpdateVerificationDto): Promise<PropertyVerification> {
    const verification = await this.prisma.propertyVerification.findFirst({
      where: { propertyId },
    });
    if (!verification) {
      return this.prisma.propertyVerification.create({
        data: {
          propertyId,
          status: dto.status,
          notes: dto.notes,
        },
      });
    }
    return this.prisma.propertyVerification.update({
      where: { id: verification.id },
      data: dto,
    });
  }
}
