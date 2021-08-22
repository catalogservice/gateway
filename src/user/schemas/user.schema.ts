import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {
    @Prop(String)
    _id: string
    @Prop(String)
    first_name: string
    @Prop(String)
    middle_name: string
    @Prop(String)
    last_name: string
    @Prop(String)
    username: string
    @Prop(String)
    password: string
    // @Prop(Number)
    // primary_number: number
    // @Prop(Number)
    // secondary_number: number
    @Prop(String)
    email: string
    // @Prop(String)
    // city: string
    // @Prop(String)
    // state: string
    // @Prop(String)
    // country: string
    // @Prop(String)
    // address: string
    // @Prop(String)
    // isVerified: boolean
    // @Prop(String)
    // role: String
    // @Prop(String)
    // user_profile: string
}

export const UserSchema = SchemaFactory.createForClass(User);