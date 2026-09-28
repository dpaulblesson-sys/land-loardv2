import { IsEnum, IsOptional } from 'class-validator';
import { VerificationStatus } from '@prisma/client';

export class UpdateVerificationDto {
  @IsEnum(VerificationStatus)
  @IsOptional()
  status?: VerificationStatus;

  @IsOptional()
  reviewerId?: string;

  @IsOptional()
  notes?: string;
}
