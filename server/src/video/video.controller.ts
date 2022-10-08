import {Body, Controller, Get, HttpStatus, Post, Res} from '@nestjs/common';
import {CreateVideoDto} from "../dto/create-video.dto";
import {VideoService} from 'src/video/video.service';

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService) { }

    @Post()
    async createVideo(@Res() response, @Body() createVideoDto: CreateVideoDto) {
        try {
            const newStudent = await this.videoService.createStudent(createVideoDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Video has been created successfully', newStudent
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Video not created!',
                error: 'Bad Request'
            });
        }
    }

    @Get()
    async getVideos(@Res() response) {
        try {
            const videoData = await this.videoService.getAllVideos();
            return response.status(HttpStatus.OK).json({
                message: 'All videos data found successfully', videoData
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
