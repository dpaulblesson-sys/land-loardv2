import { PrismaService } from '../prisma/prisma.service';
import { PropertyVerification } from '@prisma/client';
import { UpdateVerificationDto } from './dto/update-verification.dto';
export declare class VerificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getByPropertyId(propertyId: string): Promise<PropertyVerification>;
    updateStatus(propertyId: string, dto: UpdateVerificationDto): Promise<PropertyVerification>;
}
