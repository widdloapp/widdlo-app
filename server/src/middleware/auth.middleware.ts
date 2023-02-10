import {Request, Response, NextFunction} from 'express';
import {UserService} from '../user/user.service';
import * as jwt from 'jsonwebtoken';
import {Injectable, NestMiddleware, UnauthorizedException, UnprocessableEntityException} from "@nestjs/common";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly userService: UserService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;

        if (authHeader && (authHeader as string).split(' ').length > 0) {
            const splitHeader = (authHeader as string).split(' ');
            const token = splitHeader[1];

            try {
                const decoded = await jwt.verify(token, process.env.JWT_TOKEN).id;
                const user = await this.userService.getData(decoded);

                if (!user) {
                    throw new UnauthorizedException('User not found.');
                }

                res.locals.user = user.id.toString();
                res.locals.channel = user["channels"][0].id;
                next();
            } catch (error) {
                throw new UnprocessableEntityException('Invalid token.');
            }
        } else {
            throw new UnauthorizedException('Not authorized.');
        }
    }
}