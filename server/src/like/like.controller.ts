import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {LikeVideoDto} from "../dto/like-video.dto";
import {LikeService} from "./like.service";
import {HttpException} from "@nestjs/common/exceptions/http.exception";

@Controller('like')
export class LikeController {
    constructor(private readonly likeService: LikeService) { }

    @Post()
    async loginAccount(@Res() response, @Body() likeVideoDto: LikeVideoDto) {
        likeVideoDto.author = response.locals.user;

        try {
            await this.likeService.likeVideo(likeVideoDto);
        } catch (error) {
            throw new HttpException("Already liked.", HttpStatus.CONFLICT);
        }

        return response.status(HttpStatus.OK).json({
            message: 'Successfully liked.'
        });
    }
}
