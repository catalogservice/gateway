import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('Users') private userModel: Model<UserDocument>
    ) { }

    async getUser(): Promise<User[]> {
        let users:UserDocument[] = await this.userModel.find()
        return users
    }

    async createUser(userDto: CreateUserDto): Promise<User> {
        let newUser = new this.userModel(userDto)
        return await newUser.save()
    }
}
