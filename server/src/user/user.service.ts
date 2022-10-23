import {ForbiddenException, HttpStatus, Injectable, Param, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./user.schema";
import {CreateUserDto} from "../dto/create/create-user.dto";
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {LoginRequestDto} from "../dto/create/login-request.dto";
import * as jwt from 'jsonwebtoken';
import {UserInfoDto} from "../dto/get/user-info.dto";
import {Channel} from "../channel/channel.schema";

const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>, @InjectModel('Channel') private channelModel: Model<Channel>) { }

    async login(loginRequestDto: LoginRequestDto) {
        const user = await this.userModel.findOne({email: loginRequestDto.email});

        if (!user || !await bcrypt.compare(loginRequestDto.password, user.password)) {
            throw new UnauthorizedException('Invalid credentials.');
        }

        if (user.verified != true) {
            throw new ForbiddenException("Account must be verified to be used.");
        }

        return await this.createToken(user._id.toString());
    }

    async createToken(user: string) {
        return jwt.sign({id: user.toString()}, process.env.JWT_TOKEN, { expiresIn: '365d' });
    }

    async createUser(createUserDto: CreateUserDto) {
        try {
            const user = await this.userModel.create(createUserDto);

            const channel = await new this.channelModel({user: user.id, name: createUserDto.name});
            await channel.save();

            return await user.save();
        } catch (error) {
            throw new HttpException("An error ocurred. Maybe an account with that username or email already exists?", HttpStatus.CONFLICT);
        }
    }

    async getPublicData(userInfoDto: UserInfoDto) {
        const user = await this.userModel.findById(userInfoDto.id).select(["date", "name", "username"])
            .populate({path: 'channels', select: ["date", "name", "username", "avatar"], populate: {path: 'followers'}})
            .populate({path: 'badges', populate: {path: 'badge'}});

        return user;
    }
    async getData(id: string) {
        const user = await this.userModel.findById(id).select(["date", "name", "username"])
            .populate({path: 'channels', select: ["date", "name", "username", "avatar"], populate: {path: 'followers'}})
            .populate({path: 'badges', populate: {path: 'badge'}});

        return user;
    }
}
