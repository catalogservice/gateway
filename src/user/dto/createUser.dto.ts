import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, isString, IsString } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    first_name: string;

    @ApiProperty()
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    middle_name?: string;

    @ApiProperty()
    @IsString()
    last_name: string;

    @ApiProperty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;
}