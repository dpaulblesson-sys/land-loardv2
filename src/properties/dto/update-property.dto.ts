import { IsNumber, IsOptional, IsEnum } from 'class-validator';
import { PropertyStatus } from '@prisma/client';

export class UpdatePropertyDto {
  @IsOptional()
  @IsEnum(PropertyStatus)
  status?: PropertyStatus;

  @IsOptional()
  @IsNumber()
  price?: number;

  // add other updatable fields as needed
}
