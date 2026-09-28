import { Controller, Get, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { UpdateVerificationDto } from './dto/update-verification.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Get(':propertyId')
  @Roles(Role.ADMIN, Role.VERIFICATION_OFFICER)
  async get(@Param('propertyId') propertyId: string) {
    return this.verificationService.getByPropertyId(propertyId);
  }

  @Patch(':propertyId')
  @Roles(Role.ADMIN, Role.VERIFICATION_OFFICER)
  async update(
    @Param('propertyId') propertyId: string,
    @Body() dto: UpdateVerificationDto,
  ) {
    return this.verificationService.updateStatus(propertyId, dto);
  }
}
