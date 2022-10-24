import {CreateVideoDto} from "../dto/create/create-video.dto";
import {VideoService} from 'src/video/video.service';
import {VideoFeedDto} from "../dto/create/video-feed.dto";
import {GetVideoDto} from "../dto/get/get-video.dto";
import {
    BadRequestException,
    Body,
    Controller, Delete,
    Get,
    HttpStatus, Param, Patch,
    Post,
    Query, Req,
    Res, Response, UploadedFiles, UseInterceptors
} from "@nestjs/common";
import {QueryDto} from "../dto/create/query.dto";
import {UpdateVideoDto} from "../dto/update/update-video.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {FileUploadService} from "../file/file-upload.service";
import {ChannelService} from "../channel/channel.service";
import {ChannelContentQueryDto} from "../dto/get/channel-content-query.dto";

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService, private readonly channelService: ChannelService, private readonly fileUploadService: FileUploadService) { }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'source', maxCount: 1 },
    ]))
    async createVideo(@UploadedFiles() files: { thumbnail?: Express.Multer.File[], source?: Express.Multer.File[] },
                      @Res() response, @Body() createVideoDto: CreateVideoDto) {
        const channel = await this.channelService.getUserChannel(response.locals.user);
        createVideoDto.channel = channel.id;

        const thumbnailSource = await this.fileUploadService.uploadFile(files.thumbnail[0]);
        const videoSource = await this.fileUploadService.uploadFile(files.source[0]);

        createVideoDto.thumbnail = `${process.env.CDN_ENDPOINT}/${thumbnailSource.Key}`;
        createVideoDto.source = `${process.env.CDN_ENDPOINT}/${videoSource.Key}`;

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
    async getVideos(@Response() response, @Query() videoFeedDto: VideoFeedDto, @Query() queryDto: QueryDto) {
        const videos = await this.videoService.getVideoFeed(videoFeedDto, queryDto);
        return response.status(HttpStatus.OK).json({
            message: 'Videos data found successfully.', videos, pages: {current: queryDto.page},
        });
    }

    @Get(":id")
    async getVideo(@Response() response, @Param() getVideoDto: GetVideoDto) {
        const video = await this.videoService.getVideo(getVideoDto);

        return response.status(HttpStatus.OK).json({
            message: 'Video data found successfully.', video,
        });
    }

    @Get("channel/:channel")
    async getChannelVideos(@Response() response, @Param() channelContentQueryDto: ChannelContentQueryDto, @Query() queryDto: QueryDto) {
        const videos = await this.videoService.getChannelVideoFeed(channelContentQueryDto, queryDto);

        return response.status(HttpStatus.OK).json({
            message: 'Channel videos found successfully.', videos,
        });
    }

    @Patch()
    async updateVideo(@Res() response, @Body() updateVideoDto: UpdateVideoDto) {
        const video = await this.videoService.updateVideo(response.locals.user, updateVideoDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully edited.', video
        });
    }

    @Delete()
    async deleteVideo(@Res() response, @Body() getVideoDto: GetVideoDto) {
        const video = await this.videoService.deleteVideo(response.locals.user, getVideoDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully deleted.', video
        });
    }
}
