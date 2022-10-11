import {HttpStatus, Injectable, Param} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./user.schema";
import {CreateUserDto} from "../dto/create/create-user.dto";
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {LoginRequestDto} from "../dto/create/login-request.dto";
import * as jwt from 'jsonwebtoken';
import {UserInfoDto} from "../dto/get/user-info.dto";

const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async login(loginRequestDto: LoginRequestDto) {
        const user = await this.userModel.findOne({email: loginRequestDto.email});

        if (!user || !await bcrypt.compare(loginRequestDto.password, user.password)) {
            throw new HttpException('Invalid credentials.', HttpStatus.UNAUTHORIZED);
        }
        return await this.createToken(user._id.toString());
    }

    async createToken(user: string) {
        return jwt.sign({id: user.toString()}, process.env.JWT_TOKEN, { expiresIn: '365d' });
    }

    async createUser(createUserDto: CreateUserDto) {
        try {
            return await this.userModel.create(createUserDto);
        } catch (error) {
            throw new HttpException("An account with that username or email already exists.", HttpStatus.CONFLICT);
        }
    }

    async getPublicData(userInfoDto: UserInfoDto) {
        const user = await this.userModel.findById(userInfoDto.id).select(["date", "name", "username"])
            .populate("badges");

        return user;
    }
    async getData(id: string) {
        const user = await this.userModel.findById(id).select(["date", "name", "username"]).populate("channels", ["date", "name", "username"]);

        return user;
    }
}
