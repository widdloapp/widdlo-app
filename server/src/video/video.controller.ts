import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Res,
    Response,
    Query,
    InternalServerErrorException, BadRequestException
} from '@nestjs/common';
import {CreateVideoDto} from "../dto/create-video.dto";
import {VideoService} from 'src/video/video.service';
import {VideoFeedDto} from "../dto/video-feed.dto";
import {GetVideoDto} from "../dto/get-video.dto";
import {ViewService} from "../view/view.service";

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService, private readonly viewService: ViewService) { }

    @Post()
    async createVideo(@Res() response, @Body() createVideoDto: CreateVideoDto) {
        createVideoDto.author = response.locals.user;

        try {
            const video = await this.videoService.createVideo(createVideoDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Video has been uploaded successfully', video
            });
        } catch (error) {
            throw new BadRequestException("Error: Video could not be created!");
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
            throw new InternalServerErrorException("Could not get video feed.");
        }
    }

    @Get(":id")
    async getVideo(@Response() response, @Param() getVideoDto: GetVideoDto) {
        const video = await this.videoService.getVideo(getVideoDto);

        await this.viewService.registerView(getVideoDto.id);

        return response.status(HttpStatus.OK).json({
            message: 'Video data found successfully', video,
        });
    }
}
