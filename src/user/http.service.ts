import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class UserHttpService {
    declare axios: AxiosInstance;
    constructor(
        private configService: ConfigService
    ) {
        this.axios = axios.create({
            baseURL:this.configService.get("USER_API_URL")
        })
    }
}