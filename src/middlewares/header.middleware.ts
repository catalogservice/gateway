import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, Request, NextFunction } from "express";

@Injectable()
export class HeaderMiddleware implements NestMiddleware {
    constructor() { }
    async use(req: Request, res: Response, next: NextFunction) {
        res.set('Access-Control-Allow-Headers', "Authorization");
        next()
    }
}