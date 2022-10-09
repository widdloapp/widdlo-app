import {Body, Controller, Get, HttpStatus, Param, Post, Res} from '@nestjs/common';
import {ChannelService} from "./channel.service";
import {CreateChannelDto} from "../dto/create-channel.dto";
import {ChannelInfoDto} from "../dto/channel-info.dto";

@Controller('channel')
export class ChannelController {
    constructor(private readonly channelService: ChannelService) { }

    @Post()
    async createChannel(@Res() response, @Body() createChannelDto: CreateChannelDto) {
        createChannelDto.user = response.locals.user;

        const user = await this.channelService.createChannel(createChannelDto);

        return response.status(HttpStatus.OK).json({
            message: 'User created successfully', user
        });
    }

    @Get(":id")
    async getChannelInfo(@Res() response, @Param() createChannelDto: ChannelInfoDto) {
        const channel = await this.channelService.getChannelInfo(createChannelDto);

        return response.status(HttpStatus.OK).json({
            message: 'Channel found successfully', channel
        });
    }
}
