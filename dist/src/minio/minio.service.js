"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinioService = void 0;
const common_1 = require("@nestjs/common");
const minio_1 = require("minio");
let MinioService = class MinioService {
    constructor(client) {
        this.client = client;
    }
    async upload(bucket, objectName, data, contentType, privateObject = false) {
        const exists = await this.client.bucketExists(bucket);
        if (!exists) {
            await this.client.makeBucket(bucket, 'us-east-1');
        }
        await this.client.putObject(bucket, objectName, data, data instanceof Buffer ? data.length : undefined, {
            'Content-Type': contentType,
        });
        if (privateObject) {
            return this.client.presignedGetObject(bucket, objectName, 60 * 60);
        }
        return this.getPublicUrl(bucket, objectName);
    }
    async presignedPutUrl(bucket, objectName, expirySeconds = 60 * 5) {
        const exists = await this.client.bucketExists(bucket);
        if (!exists)
            await this.client.makeBucket(bucket, 'us-east-1');
        return this.client.presignedPutObject(bucket, objectName, expirySeconds);
    }
    getPublicUrl(bucket, objectName) {
        const clientAny = this.client;
        const protocol = clientAny.protocol || (clientAny.transport?.protocol) || 'http:';
        const host = clientAny.host || clientAny.endPoint || 'localhost';
        const port = clientAny.port || 9000;
        return `${protocol}//${host}:${port}/${bucket}/${objectName}`;
    }
};
exports.MinioService = MinioService;
exports.MinioService = MinioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MINIO_CLIENT')),
    __metadata("design:paramtypes", [minio_1.Client])
], MinioService);
//# sourceMappingURL=minio.service.js.map