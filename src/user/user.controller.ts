import { Body, Controller, Delete, Get, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { createUserResponseDto } from './dto/createResponse.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginDto } from './dto/login.dto';
import { UserService } from './user.service';
import { AuthHttpService } from 'src/auth/http.service';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(
        private userService: UserService,
        private authHttpService: AuthHttpService
    ) { }

    @Get()
    async getAllUsers(): Promise<createUserResponseDto[]> {
        let users = await this.userService.getUser();
        let response: createUserResponseDto[] = [];
        users.forEach(user => {
            let item: createUserResponseDto = {
                username: user.username,
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name
            };
            response.push(item);
        })
        return response;
    }

    @Get('me')
    async getCurrentUser(@Req() req: Request): Promise<any> {
        let response = await this.authHttpService.axios.get('/user/me', { headers: { authorization: req.headers.authorization } })
        return response.data
    }

    @Post()
    async createUser(@Body() body: CreateUserDto): Promise<createUserResponseDto> {
        let newUser = await this.userService.createUser(body);
        let response: createUserResponseDto = {
            username: newUser.username,
            id: newUser._id,
            first_name: newUser.first_name,
            last_name: newUser.last_name
        }
        return response;
    }

    @Delete()
    deleteUser(): string {
        return 'delete user'
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto, @Res() res: Response) {
        let response = await this.authHttpService.axios.post('/user/login', loginDto);
        let accessToken = response.headers['authorization'];
        res.set('authorization', accessToken);
        res.json(response.data)
    }
}
