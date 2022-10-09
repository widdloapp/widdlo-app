import {Body, Controller, HttpStatus, Post, Response} from "@nestjs/common";
import {CreateChatDto} from "../dto/create-chat.dto";
import {ChatService} from "./chat.service";

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @Post()
    async createChat(@Response() response, @Body() createChatDto: CreateChatDto) {
        const chat = await this.chatService.createChat(createChatDto);

        return response.status(HttpStatus.CREATED).json({
            message: 'Chat successfully created.', chat
        });
    }
}
