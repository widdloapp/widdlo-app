import {Body, ConflictException, Controller, Delete, HttpStatus, Post, Res} from '@nestjs/common';
import {LikeVideoDto} from "../dto/like-video.dto";
import {LikeService} from "./like.service";
import {FollowChannelDto} from "../dto/follow-channel.dto";

@Controller('like')
export class LikeController {
    constructor(private readonly likeService: LikeService) { }

    @Post()
    async likeVideo(@Res() response, @Body() likeVideoDto: LikeVideoDto) {
        likeVideoDto.author = response.locals.user;

        try {
            await this.likeService.likeVideo(likeVideoDto);
        } catch (error) {
            throw new ConflictException("Already liked.");
        }

        return response.status(HttpStatus.OK).json({
            message: 'Successfully liked.'
        });
    }
    @Delete()
    async unlikeVideo(@Res() response, @Body() likeVideoDto: LikeVideoDto) {
        likeVideoDto.author = response.locals.user;

        if (await this.likeService.checkExists(likeVideoDto) == null) {
            throw new ConflictException("You don't liked this video.")
        }

        await this.likeService.unlikeVideo(likeVideoDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully unliked.'
        });
    }
}
