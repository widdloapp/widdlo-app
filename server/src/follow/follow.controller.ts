import {BadRequestException, Body, ConflictException, Controller, Delete, HttpStatus, Post, Res} from '@nestjs/common';
import {FollowService} from "./follow.service";
import {FollowChannelDto} from "../dto/follow-channel.dto";
import {ChannelService} from "../channel/channel.service";

@Controller('follow')
export class FollowController {
    constructor(private readonly followService: FollowService, private readonly channelService: ChannelService) { }

    @Post()
    async followChannel(@Res() response, @Body() followChannelDto: FollowChannelDto) {
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
    @Delete()
    async unfollowChannel(@Res() response, @Body() followChannelDto: FollowChannelDto) {
        followChannelDto.user = response.locals.user;

        if (await this.followService.checkExists(followChannelDto) == null) {
            throw new ConflictException("You don't follow this channel.")
        }

        await this.followService.unfollowChannel(followChannelDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully unfollowed.'
        });
    }
}
