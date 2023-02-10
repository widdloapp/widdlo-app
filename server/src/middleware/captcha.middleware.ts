import {Request, Response, NextFunction} from 'express';
import {ConflictException, Injectable, NestMiddleware, UnprocessableEntityException} from "@nestjs/common";

const axios = require("axios")

@Injectable()
export class CaptchaMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const body = req.body;

        if (!body.recaptcha_id || !body.recaptcha_value) {
            throw new UnprocessableEntityException('Captcha is required.');
        }

        const secret = process.env.RECAPTCHA_KEY;
        const remoteip = req.connection.remoteAddress;
        const reply = await axios.get('https://www.google.com/recaptcha/api/siteverify', { params: {secret: secret, response: body.recaptcha_value, remoteip: remoteip} });

        // @ts-ignore
        if (reply.data.success != true) {
            throw new ConflictException("Invalid captcha.")
        }
        next();
    }
}