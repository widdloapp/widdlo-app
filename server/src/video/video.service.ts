import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Video} from "./video.schema";
import {CreateVideoDto} from "../dto/create/create-video.dto";
import {VideoFeedDto} from "../dto/create/video-feed.dto";
import {GetVideoDto} from "../dto/create/get-video.dto";
import {QueryDto} from "../dto/create/query.dto";

@Injectable()
export class VideoService {
    constructor(@InjectModel('Video') private videoModel: Model<Video>) { }
    async createVideo(createVideoDto: CreateVideoDto): Promise<Video> {
        const user = await new this.videoModel(createVideoDto);
        return user.save();
    }

    async getVideoFeed(videoFeedDto: VideoFeedDto, queryDto: QueryDto): Promise<Video[]> {
        const videos = await this.videoModel.find().select(["title", "description", "views", "likes"])
            .populate('author', ["username"]).populate('likes').limit(20).skip(queryDto.page * 20);
        if (!videos || videos.length == 0) {
            throw new NotFoundException('Videos data not found!');
        }

        return videos;
    }

    async getVideo(getVideoDto: GetVideoDto): Promise<Video> {
        const video = await this.videoModel.findById(getVideoDto.id).select(["title", "description", "views", "likes"])
            .populate('author', ["username"]).populate('likes');
        if (!video) {
            throw new NotFoundException('Unknown video!');
        }

        await video.update({views: video.views + 1})

        return video;
    }
}
