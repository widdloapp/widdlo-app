import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {LikeVideoDto} from "../dto/like-video.dto";
import {LikeService} from "./like.service";

@Controller('like')
export class LikeController {
    constructor(private readonly likeService: LikeService) { }

    @Post()
    async loginAccount(@Res() response, @Body() likeVideoDto: LikeVideoDto) {
        await this.likeService.likeVideo(likeVideoDto);

        return response.status(HttpStatus.OK).json({
            message: 'Liked successfully'
        });
    }
}
