import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/loginResponse.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  // @Post('register')
  // register(){
  //   return this.authService.register();
  // }

  @Post('login')
  async login(@Body() body: LoginDto) {
    const {username, password} = body;
    const user = await this.authService.login(
      username,password
    )
    // return new LoginResponseDto({user})
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }

  @Get()
  get(){
    return this.authService.getUser()
  }

}
