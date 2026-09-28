import { Client as MinioClient } from 'minio';
import { Readable } from 'stream';
export declare class MinioService {
    private readonly client;
    constructor(client: MinioClient);
    upload(bucket: string, objectName: string, data: Buffer | Readable, contentType: string, privateObject?: boolean): Promise<string>;
    presignedPutUrl(bucket: string, objectName: string, expirySeconds?: number): Promise<string>;
    getPublicUrl(bucket: string, objectName: string): string;
}
