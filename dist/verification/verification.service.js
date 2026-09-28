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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VerificationService = class VerificationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getByPropertyId(propertyId) {
        const verification = await this.prisma.propertyVerification.findFirst({
            where: { propertyId },
        });
        if (!verification)
            throw new common_1.NotFoundException('Verification not found');
        return verification;
    }
    async updateStatus(propertyId, dto) {
        const verification = await this.prisma.propertyVerification.findFirst({
            where: { propertyId },
        });
        if (!verification) {
            return this.prisma.propertyVerification.create({
                data: {
                    propertyId,
                    status: dto.status,
                    notes: dto.notes,
                },
            });
        }
        return this.prisma.propertyVerification.update({
            where: { id: verification.id },
            data: dto,
        });
    }
};
exports.VerificationService = VerificationService;
exports.VerificationService = VerificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VerificationService);
//# sourceMappingURL=verification.service.js.map