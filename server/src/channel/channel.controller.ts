import {Body, ConflictException, Controller, Get, HttpStatus, Param, Patch, Post, Res} from '@nestjs/common';
import {ChannelService} from "./channel.service";
import {CreateChannelDto} from "../dto/create/create-channel.dto";
import {ChannelInfoDto} from "../dto/create/channel-info.dto";
import {StreamService} from "../stream/stream.service";
import {UpdateChannelDto} from "../dto/update/update-channel.dto";
import {KeyQueryDto} from "../dto/get/key-query.dto";

@Controller('channel')
export class ChannelController {
    constructor(private readonly channelService: ChannelService, private readonly streamService: StreamService) { }

    @Post()
    async createChannel(@Res() response, @Body() createChannelDto: CreateChannelDto, @Body() keyQueryDto: KeyQueryDto) {
        createChannelDto.user = response.locals.user;

        try {
            const channel = await this.channelService.createChannel(createChannelDto);

            await this.streamService.createStream(keyQueryDto);

            return response.status(HttpStatus.OK).json({
                message: 'Channel successfully created.', channel
            });
        } catch (error) {
            throw new ConflictException("This username is already in use or a channel for this user already exists.");
        }
    }

    @Get(":channel")
    async getChannelInfo(@Res() response, @Param() createChannelDto: ChannelInfoDto) {
        const channel = await this.channelService.getChannelInfo(createChannelDto);

        return response.status(HttpStatus.OK).json({
            message: 'Channel found successfully.', channel
        });
    }

    @Patch()
    async updateChannel(@Res() response, @Body() updateChannelDto: UpdateChannelDto) {
        updateChannelDto.id = response.locals.channel;

        console.log(updateChannelDto)
        const channel = await this.channelService.updateChannel(response.locals.channel, updateChannelDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully edited.', channel
        });
    }
}