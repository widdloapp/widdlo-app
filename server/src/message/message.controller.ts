import {BadRequestException, Body, Controller, Get, HttpStatus, Param, Patch, Post, Query, Res} from '@nestjs/common';
import {CreateMessageDto} from "../dto/create/create-message.dto";
import {MessageService} from "./message.service";
import {ChatService} from "../chat/chat.service";
import {MessageQueryDto} from "../dto/create/message-query.dto";
import {QueryDto} from "../dto/create/query.dto";
import {UpdateMessageDto} from "../dto/update/update-message.dto";

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService, private readonly chatService: ChatService) { }

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

    @Get(":chat")
    async getMessages(@Res() response, @Param() messageQueryDto: MessageQueryDto, @Query() queryDto: QueryDto) {
        const messages = await this.messageService.getMessages(messageQueryDto, queryDto);

        return response.status(HttpStatus.OK).json({
            message: 'Messages found.', messages, pages: {current: queryDto.page || 0}
        });
    }

    @Patch()
    async updateMessage(@Res() response, @Body() updateMessageDto: UpdateMessageDto) {
        console.log(updateMessageDto)
        const editedMessage = await this.messageService.updateMessage(response.locals.user, updateMessageDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully edited.', editedMessage
        });
    }
}
