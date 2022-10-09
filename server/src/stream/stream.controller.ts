import {Body, Controller, Get, HttpStatus, Res, Response, Query, NotFoundException, Post} from '@nestjs/common';
import {VideoFeedDto} from "../dto/video-feed.dto";
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {StreamService} from "./stream.service";
import {CheckStreamDto} from "../dto/check-stream.dto";

@Controller('stream')
export class StreamController {
    constructor(private readonly streamService: StreamService) { }

    @Get()
    async getStreamKey(@Res() response, @Body() user: string) {
        user = response.locals.user;

        const stream = await this.streamService.getStreamKey(user);

        if (!stream) {
            throw new NotFoundException('Stream could not found!');
        }

        return response.status(HttpStatus.CREATED).json({
            message: 'Stream data retrieved successfully', stream
        });
    }

    @Post()
    async checkStreamKey(@Response() response, @Query() checkStreamDto: CheckStreamDto) {
        const stream = await this.streamService.getStreamKey(checkStreamDto.path);

        if (!stream) {
            throw new NotFoundException('Stream could not found!');
        }

        console.log(stream);
    }
}
