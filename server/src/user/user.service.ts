import {Injectable, Param} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./user.schema";
import {CreateUserDto} from "../dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = await new this.userModel(createUserDto);

        return newUser.save();
    }
    async getById(@Param('id') id: string): Promise<User> {
        const user = await this.userModel.findById(id);

        return user;
    }
}
