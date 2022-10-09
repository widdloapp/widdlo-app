import {Body, Controller, Get, HttpStatus, Param, Post, Res, Response, Query} from '@nestjs/common';
import {CreateVideoDto} from "../dto/create-video.dto";
import {VideoService} from 'src/video/video.service';
import {VideoFeedDto} from "../dto/video-feed.dto";
import {HttpException} from "@nestjs/common/exceptions/http.exception";

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService) { }

    @Post()
    async createVideo(@Res() response, @Body() createVideoDto: CreateVideoDto) {
        createVideoDto.author = response.locals.user;

        try {
            const video = await this.videoService.createVideo(createVideoDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Video has been uploaded successfully', video
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Video could not be created!',
                error: 'Bad Request'
            });
        }
    }

    @Get()
    async getVideos(@Response() response, @Query() videoFeedDto: VideoFeedDto) {
        try {
            const videos = await this.videoService.getVideoFeed(videoFeedDto);
            return response.status(HttpStatus.OK).json({
                message: 'Videos data found successfully', videos, pages: {current: videoFeedDto.page},
            });
        } catch (error) {
            throw new HttpException("Could not get video feed.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
