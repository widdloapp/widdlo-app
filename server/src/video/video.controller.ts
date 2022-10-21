import {CreateVideoDto} from "../dto/create/create-video.dto";
import {VideoService} from 'src/video/video.service';
import {VideoFeedDto} from "../dto/create/video-feed.dto";
import {GetVideoDto} from "../dto/get/get-video.dto";
import {
    BadRequestException,
    Body,
    Controller, Delete,
    Get,
    HttpStatus, Param, ParseFilePipeBuilder, Patch,
    Post,
    Query,
    Res, Response, UploadedFile, UseInterceptors
} from "@nestjs/common";
import {QueryDto} from "../dto/create/query.dto";
import {UpdateVideoDto} from "../dto/update/update-video.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileUploadService} from "../file/file-upload.service";

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService, private readonly fileUploadService: FileUploadService) { }

    @Post()
    @UseInterceptors(FileInterceptor('thumbnail'))
    async createVideo(@UploadedFile(new ParseFilePipeBuilder().addFileTypeValidator(
        {fileType: 'png'}
    ).build({errorHttpStatusCode: 400})) file: Express.Multer.File, @Res() response, @Body() createVideoDto: CreateVideoDto) {
        const thumbnail = await this.fileUploadService.uploadFile(file);
        createVideoDto.thumbnail = thumbnail.Location;

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
