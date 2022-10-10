import {Body, ConflictException, Controller, Get, HttpStatus, Param, Patch, Post, Query, Res} from '@nestjs/common';
import {ChannelService} from "./channel.service";
import {CreateChannelDto} from "../dto/create/create-channel.dto";
import {ChannelInfoDto} from "../dto/create/channel-info.dto";
import {StreamService} from "../stream/stream.service";
import {MessageQueryDto} from "../dto/create/message-query.dto";
import {QueryDto} from "../dto/create/query.dto";
import {UpdateMessageDto} from "../dto/update/update-message.dto";
import {UpdateChannelDto} from "../dto/update/update-channel.dto";

@Controller('channel')
export class ChannelController {
    constructor(private readonly channelService: ChannelService, private readonly streamService: StreamService) { }

    @Post()
    async createChannel(@Res() response, @Body() createChannelDto: CreateChannelDto) {
        createChannelDto.user = response.locals.user;

        try {
            const channel = await this.channelService.createChannel(createChannelDto);

            await this.streamService.createStream(channel._id)

            return response.status(HttpStatus.OK).json({
                message: 'Channel successfully created.', channel
            });
        } catch (error) {
            throw new ConflictException("This username is already in use or a channel for this user already exists.");
        }
    }

    @Get(":id")
    async getChannelInfo(@Res() response, @Param() createChannelDto: ChannelInfoDto) {
        const channel = await this.channelService.getChannelInfo(createChannelDto);

        return response.status(HttpStatus.OK).json({
            message: 'Channel found successfully.', channel
        });
    }

    @Patch()
    async updateChannel(@Res() response, @Body() createChannelDto: Partial<CreateChannelDto>) {
        const channel = await this.channelService.updateChannel(response.locals.user, createChannelDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully edited.', channel
        });
    }
}