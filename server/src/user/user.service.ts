import {HttpStatus, Injectable, Param} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./user.schema";
import {CreateUserDto} from "../dto/create-user.dto";
import * as jwt from 'jsonwebtoken';
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {LoginRequestDto} from "../dto/login-request.dto";

const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async login(loginRequestDto: LoginRequestDto) {
        const user = await this.userModel.findOne({email: loginRequestDto.email});

        if (!user || !await bcrypt.compare(loginRequestDto.password, user.password)) {
            throw new HttpException('Invalid credentials.', HttpStatus.UNAUTHORIZED);
        }
        return jwt.sign(user._id.toString(), process.env.JWT_TOKEN);
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return await this.userModel.create({
            username: createUserDto.username,
            name: createUserDto.name,
            email: createUserDto.email,
            password: await bcrypt.hash(createUserDto.password, 10)
        });
    }

    async getById(@Param('id') id: string) {
        const user = await this.userModel.findById(id);

        const data = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        return data;
    }
}
