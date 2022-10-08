import {Body, HttpStatus, Injectable, Param, Res} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./user.schema";
import {CreateUserDto} from "../dto/create-user.dto";
import * as jwt from 'jsonwebtoken';
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {LoginRequestDto} from "../dto/login-request.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = await new this.userModel(createUserDto);

        return newUser.save();
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
    async login(loginRequestDto: LoginRequestDto) {
        const user = await this.userModel.findOne({email: loginRequestDto.email});

        if (!user) {
            throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
        }

        return jwt.sign(user._id.toString(), process.env.JWT_TOKEN);
    }
}
