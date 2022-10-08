import {Body, HttpStatus, Injectable, Param, Res} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./user.schema";
import {CreateUserDto} from "../dto/create-user.dto";
import * as jwt from 'jsonwebtoken';
import {HttpException} from "@nestjs/common/exceptions/http.exception";

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
    async login(@Res() response, @Body() body) {
        const user = await this.userModel.findById(body.id);

        if (!user) {
            throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
        }

        return jwt.sign(body.id, process.env.JWT_TOKEN);
    }
}
