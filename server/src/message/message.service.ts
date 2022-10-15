import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Message} from "./message.schema";
import {CreateMessageDto} from "../dto/create/create-message.dto";
import {MessageQueryDto} from "../dto/create/message-query.dto";
import {QueryDto} from "../dto/create/query.dto";
import {UpdateMessageDto} from "../dto/update/update-message.dto";
import {GetMessageDto} from "../dto/get/get-message.dto";

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

        /*if (!messages || messages.length == 0) {
            throw new NotFoundException("No messages found.");
        }*/

        return messages;
    }
    async updateMessage(user: string, updateMessageDto: UpdateMessageDto) {
        const message = await this.messageModel.findOneAndUpdate({_id: updateMessageDto.id, author: user}, updateMessageDto, {new: true});

        if (!message) {
            throw new NotFoundException("Unknown message or invalid authentication.");
        }

        return message;
    }
    async deleteMessage(user: string, getMessageDto: GetMessageDto) {
        const message = await this.messageModel.findOneAndDelete({_id: getMessageDto.id, author: user});

        if (!message) {
            throw new NotFoundException('Unknown message or invalid authentication.');
        }
    }
}
