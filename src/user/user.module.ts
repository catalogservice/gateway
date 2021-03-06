import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Users", schema: UserSchema }
    ]), 
    AuthModule,
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
