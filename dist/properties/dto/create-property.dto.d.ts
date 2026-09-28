import { PropertyType, ListingType } from '@prisma/client';
export declare class CreatePropertyDto {
    title: string;
    slug: string;
    description?: string;
    propertyType: PropertyType;
    listingType: ListingType;
    price: number;
    currency?: string;
    negotiable?: boolean;
    bedrooms?: number;
    bathrooms?: number;
    balconies?: number;
    floor?: number;
    totalFloors?: number;
    builtUpArea?: number;
    carpetArea?: number;
    landArea?: number;
    parking?: number;
    furnishing?: string;
    propertyAge?: number;
}
