import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    register(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: import(".prisma/client").$Enums.Role;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(userId: string, role: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    private createJwtTokens;
}
