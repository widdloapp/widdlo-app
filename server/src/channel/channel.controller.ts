import {Body, Controller, Get, HttpStatus, Param, Post, Res} from '@nestjs/common';
import {ChannelService} from "./channel.service";
import {CreateChannelDto} from "../dto/create-channel.dto";
import {ChannelInfoDto} from "../dto/channel-info.dto";
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {StreamService} from "../stream/stream.service";

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
            console.log(error)
            throw new HttpException("A channel for this user already exists.", HttpStatus.CONFLICT);
        }
    }

    @Get(":id")
    async getChannelInfo(@Res() response, @Param() createChannelDto: ChannelInfoDto) {
        const channel = await this.channelService.getChannelInfo(createChannelDto);

        return response.status(HttpStatus.OK).json({
            message: 'Channel found successfully', channel
        });
    }
}
