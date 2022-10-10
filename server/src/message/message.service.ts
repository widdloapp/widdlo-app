import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Message} from "./message.schema";
import {CreateMessageDto} from "../dto/create-message.dto";
import {MessageQueryDto} from "../dto/message-query.dto";
import {QueryDto} from "../dto/query.dto";
import {UpdateMessageDto} from "../dto/update-message.dto";

@Injectable()
export class MessageService {
    constructor(@InjectModel('Message') private messageModel: Model<Message>) { }

    async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
        const like = await new this.messageModel(createMessageDto);
        return like.save();
    }

    async getMessages(messageQueryDto: MessageQueryDto, queryDto: QueryDto): Promise<Message[]> {
        const messages = await this.messageModel.find({chat: messageQueryDto.chat}).populate('author', ["username"])
            .limit(20).skip(queryDto.page * 20);

        if (!messages || messages.length == 0) {
            throw new NotFoundException('Messages not found!');
        }

        return messages;
    }
    async updateMessage(user: string, updateMessageDto: UpdateMessageDto) {
        const message = await this.messageModel.findByIdAndUpdate(updateMessageDto.id, updateMessageDto);

        if (!message) {
            throw new NotFoundException("Unknown message.");
        }

        return message;
    }
}
