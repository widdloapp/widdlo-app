import {BadRequestException, Body, ConflictException, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {FollowService} from "./follow.service";
import {FollowChannelDto} from "../dto/follow-channel.dto";
import {ChannelService} from "../channel/channel.service";

@Controller('follow')
export class FollowController {
    constructor(private readonly followService: FollowService, private readonly channelService: ChannelService) { }

    @Post()
    async likeVideo(@Res() response, @Body() followChannelDto: FollowChannelDto) {
        followChannelDto.user = response.locals.user;

        if (await this.channelService.checkExists(followChannelDto.channel) == null) {
            throw new BadRequestException("Invalid channel.");
        }

        try {
            await this.followService.followChannel(followChannelDto);
        } catch (error) {
            throw new ConflictException("Already following.");
        }

        return response.status(HttpStatus.OK).json({
            message: 'Successfully followed.'
        });
    }
}
