import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup() {
    return `signup route`;
  }

  @Post('login')
  login() {
    return 'login route';
  }

  @Post('logout')
  logout() {
    return 'logout route';
  }
}
