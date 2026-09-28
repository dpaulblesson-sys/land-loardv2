import { IsEnum, IsBoolean, IsOptional } from 'class-validator';
import { MediaType } from '@prisma/client';

export class CreateMediaDto {
  @IsEnum(MediaType)
  type: MediaType;

  @IsBoolean()
  @IsOptional()
  isPrimary?: boolean;
}
