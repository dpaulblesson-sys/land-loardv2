import { Injectable, Inject } from '@nestjs/common';
import { Client as MinioClient } from 'minio';
import { Readable } from 'stream';

@Injectable()
export class MinioService {
  constructor(@Inject('MINIO_CLIENT') private readonly client: MinioClient) {}

  // Upload a buffer or stream to a bucket, returns the object URL (public or signed)
  async upload(bucket: string, objectName: string, data: Buffer | Readable, contentType: string, privateObject = false): Promise<string> {
    // Ensure bucket exists (auto‑create if missing)
    const exists = await this.client.bucketExists(bucket);
    if (!exists) {
      await this.client.makeBucket(bucket, 'us-east-1');
    }
    await this.client.putObject(bucket, objectName, data, data instanceof Buffer ? data.length : undefined, {
      'Content-Type': contentType,
    });
    if (privateObject) {
      // Return a signed URL valid for 1 hour
      return this.client.presignedGetObject(bucket, objectName, 60 * 60);
    }
    return this.getPublicUrl(bucket, objectName);
  }

  // Generate a pre‑signed PUT URL for client‑side direct upload
  async presignedPutUrl(bucket: string, objectName: string, expirySeconds = 60 * 5): Promise<string> {
    const exists = await this.client.bucketExists(bucket);
    if (!exists) await this.client.makeBucket(bucket, 'us-east-1');
    return this.client.presignedPutObject(bucket, objectName, expirySeconds);
  }

  getPublicUrl(bucket: string, objectName: string): string {
    const clientAny = this.client as any;
    const protocol = clientAny.protocol || (clientAny.transport?.protocol) || 'http:';
    const host = clientAny.host || clientAny.endPoint || 'localhost';
    const port = clientAny.port || 9000;
    return `${protocol}//${host}:${port}/${bucket}/${objectName}`;
  }
}
