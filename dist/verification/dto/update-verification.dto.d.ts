import { VerificationStatus } from '@prisma/client';
export declare class UpdateVerificationDto {
    status?: VerificationStatus;
    reviewerId?: string;
    notes?: string;
}
