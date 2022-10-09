import {BadRequestException, Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {CreateMessageDto} from "../dto/create-message.dto";
import {MessageService} from "./message.service";
import {ChatService} from "../chat/chat.service";

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService, private readonly chatService: ChatService, ) { }

    @Post()
    async createMessage(@Res() response, @Body() createMessageDto: CreateMessageDto) {
        createMessageDto.author = response.locals.user;

        const chatMessage = await this.messageService.createMessage(createMessageDto);

        if (await this.chatService.checkExists(createMessageDto.chat) == null) {
            throw new BadRequestException("Invalid chat.");
        }

        return response.status(HttpStatus.OK).json({
            message: 'Successfully sent.', chatMessage
        });
    }
}
