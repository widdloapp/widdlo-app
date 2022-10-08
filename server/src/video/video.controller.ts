import {Body, Controller, Get, HttpStatus, Post, Res} from '@nestjs/common';
import {CreateVideoDto} from "../dto/create-video.dto";
import {VideoService} from 'src/video/video.service';

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
    async getVideos(@Res() response) {
        try {
            const videos = await this.videoService.getAllVideos();
            return response.status(HttpStatus.OK).json({
                message: 'Videos data found successfully', videos
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
