import { IsString, IsNotEmpty, IsEnum, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { PropertyType, ListingType } from '@prisma/client';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(PropertyType)
  propertyType: PropertyType;

  @IsEnum(ListingType)
  listingType: ListingType;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  currency?: string;

  @IsBoolean()
  @IsOptional()
  negotiable?: boolean;

  @IsNumber()
  @IsOptional()
  bedrooms?: number;

  @IsNumber()
  @IsOptional()
  bathrooms?: number;

  @IsNumber()
  @IsOptional()
  balconies?: number;

  @IsNumber()
  @IsOptional()
  floor?: number;

  @IsNumber()
  @IsOptional()
  totalFloors?: number;

  @IsNumber()
  @IsOptional()
  builtUpArea?: number;

  @IsNumber()
  @IsOptional()
  carpetArea?: number;

  @IsNumber()
  @IsOptional()
  landArea?: number;

  @IsNumber()
  @IsOptional()
  parking?: number;

  @IsString()
  @IsOptional()
  furnishing?: string;

  @IsNumber()
  @IsOptional()
  propertyAge?: number;
}
