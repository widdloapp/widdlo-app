import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Message} from "./message.schema";
import {CreateMessageDto} from "../dto/create-message.dto";
import {MessageQueryDto} from "../dto/message-query.dto";

@Injectable()
export class MessageService {
    constructor(@InjectModel('Message') private messageModel: Model<Message>) { }

    async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
        const like = await new this.messageModel(createMessageDto);
        return like.save();
    }

    async getMessages(messageQueryDto: MessageQueryDto): Promise<Message[]> {
        const messages = await this.messageModel.find({chat: messageQueryDto.chat});

        return messages;
    }
}
