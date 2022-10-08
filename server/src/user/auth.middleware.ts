import {HttpException} from '@nestjs/common/exceptions/http.exception';
import {NestMiddleware, HttpStatus, Injectable} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {UserService} from './user.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly userService: UserService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;

        if (authHeader && (authHeader as string).split(' ')[1]) {
            const token = (authHeader as string).split(' ')[1];
            const decoded = await jwt.verify(token, process.env.JWT_TOKEN);
            const user = await this.userService.getById(decoded);

            if (!user) {
                throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
            }

            next();
        } else {
            throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
        }
    }
}