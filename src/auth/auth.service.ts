import { Injectable } from "@nestjs/common";
import { AuthHttpService } from "./http.service";

@Injectable()
export class AuthService {
    constructor(
        private httpService: AuthHttpService
    ) { }
    async getCurrentUser() {
       return await this.httpService.axios.get('/user/me')
    }
}