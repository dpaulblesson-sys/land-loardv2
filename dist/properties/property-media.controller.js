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
exports.PropertyMediaController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const client_1 = require("@prisma/client");
const minio_service_1 = require("../minio/minio.service");
const prisma_service_1 = require("../prisma/prisma.service");
const property_media_dto_1 = require("./property-media.dto");
const uuid_1 = require("uuid");
let PropertyMediaController = class PropertyMediaController {
    constructor(minioService, prisma) {
        this.minioService = minioService;
        this.prisma = prisma;
    }
    async upload(propertyId, file, dto) {
        const property = await this.prisma.property.findUnique({ where: { id: propertyId } });
        if (!property) {
            throw new common_1.NotFoundException('Property not found');
        }
        const uniqueId = (0, uuid_1.v4)();
        const objectKey = `${propertyId}/${uniqueId}_${file.originalname}`;
        await this.minioService.upload('property-media', objectKey, file.buffer, file.mimetype);
        return this.prisma.propertyMedia.create({
            data: {
                propertyId,
                type: dto.type,
                url: `${this.minioService.getPublicUrl('property-media', objectKey)}`,
                isPrimary: dto.isPrimary ?? false,
            },
        });
    }
    async list(propertyId) {
        return this.prisma.propertyMedia.findMany({ where: { propertyId } });
    }
};
exports.PropertyMediaController = PropertyMediaController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(client_1.Role.SELLER, client_1.Role.ADMIN),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('propertyId')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, property_media_dto_1.CreateMediaDto]),
    __metadata("design:returntype", Promise)
], PropertyMediaController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('propertyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropertyMediaController.prototype, "list", null);
exports.PropertyMediaController = PropertyMediaController = __decorate([
    (0, common_1.Controller)('properties/:propertyId/media'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [minio_service_1.MinioService,
        prisma_service_1.PrismaService])
], PropertyMediaController);
//# sourceMappingURL=property-media.controller.js.map