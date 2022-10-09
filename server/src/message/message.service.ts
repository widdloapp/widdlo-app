import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Message} from "./message.schema";
import {CreateMessageDto} from "../dto/create-message.dto";

@Injectable()
export class MessageService {
    constructor(@InjectModel('Message') private messageModel: Model<Message>) { }

    async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
        const like = await new this.messageModel(createMessageDto);
        return like.save();
    }
}
