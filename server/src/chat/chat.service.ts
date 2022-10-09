import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateChatDto} from "../dto/create-chat.dto";
import {Chat} from "./chat.schema";

@Injectable()
export class ChatService {
    constructor(@InjectModel('Chat') private chatModel: Model<Chat>) { }
    async createChat(createChatDto: CreateChatDto) {
        return await this.chatModel.create(createChatDto);
    }
    async checkExists(chat: string) {
        return this.chatModel.exists({_id: chat});
    }
}
