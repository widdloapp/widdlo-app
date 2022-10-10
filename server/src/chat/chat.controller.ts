import {Body, Controller, ForbiddenException, HttpStatus, Post, Response} from "@nestjs/common";
import {CreateChatDto} from "../dto/create/create-chat.dto";
import {ChatService} from "./chat.service";
import {ChannelService} from "../channel/channel.service";
import {ChannelInfoDto} from "../dto/create/channel-info.dto";

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService, private readonly channelService: ChannelService) { }

    @Post()
    async createChat(@Response() response, @Body() createChatDto: CreateChatDto, @Body() channelInfoDto: ChannelInfoDto) {
        if ((await this.channelService.getChannelInfo(channelInfoDto)).user == response.locals.user) {
            const chat = await this.chatService.createChat(createChatDto);

            return response.status(HttpStatus.CREATED).json({
                message: 'Chat successfully created.', chat
            });
        }

        throw new ForbiddenException("You must be the owner of the targeted channel.");
    }
}
