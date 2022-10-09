import {Body, ConflictException, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {LikeVideoDto} from "../dto/like-video.dto";
import {LikeService} from "./like.service";

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
}
