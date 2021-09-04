import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthHttpService } from './auth/http.service';
import { createUserResponseDto } from './user/dto/createResponse.dto';
import { CreateUserDto } from './user/dto/createUser.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authHttpService: AuthHttpService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('/register')
  async register(@Body() body: CreateUserDto): Promise<createUserResponseDto> {
    let response = await this.authHttpService.axios.post('/user/register', body);
    return response.data;
  }

}
