import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "../schema/user.schema";
import {CreateUserDto} from "../dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const newStudent = await new this.userModel(createUserDto);
        return newStudent.save();
    }
}
