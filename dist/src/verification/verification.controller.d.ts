import { VerificationService } from './verification.service';
import { UpdateVerificationDto } from './dto/update-verification.dto';
export declare class VerificationController {
    private readonly verificationService;
    constructor(verificationService: VerificationService);
    get(propertyId: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.VerificationStatus;
        propertyId: string;
        reviewerId: string | null;
        notes: string | null;
        reviewedAt: Date | null;
    }>;
    update(propertyId: string, dto: UpdateVerificationDto): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.VerificationStatus;
        propertyId: string;
        reviewerId: string | null;
        notes: string | null;
        reviewedAt: Date | null;
    }>;
}
