import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { createUserResponseDto } from './dto/createResponse.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(
        private userService: UserService
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
    getCurrentUser(): string {
        return 'get current user'
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
    login(@Body() loginDto: LoginDto): string {
        return "login"
    }
}
