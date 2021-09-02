import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthHttpService } from './http.service';

@Module({
    imports: [],
    providers: [AuthHttpService,AuthService],
    controllers: [],
    exports: [AuthHttpService,AuthService]
})
export class AuthModule { }