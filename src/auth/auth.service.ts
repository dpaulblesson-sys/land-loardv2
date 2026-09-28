import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // Register a new user (email + password)
  async register(email: string, password: string) {
    const passwordHash = await argon2.hash(password);
    const user = await this.usersService.create({ email, passwordHash });
    return this.createJwtTokens(user.id, user.role);
  }

  // Validate credentials for login
  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;
    const isValid = await argon2.verify(user.passwordHash, password);
    return isValid ? user : null;
  }

  async login(userId: string, role: string) {
    return this.createJwtTokens(userId, role);
  }

  private createJwtTokens(userId: string, role: string) {
    const payload = { sub: userId, role };
    const secret = this.configService.get<string>('JWT_SECRET');
    const accessToken = this.jwtService.sign(payload, { secret, expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { secret, expiresIn: '7d' });
    return { accessToken, refreshToken };
  }
}
