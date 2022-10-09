import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Video} from "./video.schema";
import {CreateVideoDto} from "../dto/create-video.dto";
import {VideoFeedDto} from "../dto/video-feed.dto";
import {GetVideoDto} from "../dto/get-video.dto";

@Injectable()
export class VideoService {
    constructor(@InjectModel('Video') private videoModel: Model<Video>) { }
    async createVideo(createVideoDto: CreateVideoDto): Promise<Video> {
        const user = await new this.videoModel(createVideoDto);
        return user.save();
    }

    async getVideoFeed(videoFeedDto: VideoFeedDto): Promise<Video[]> {
        const videos = await this.videoModel.find().select(["title", "description", "views", "likes"])
            .populate('author', ["username"]).populate('likes').limit(20).skip(videoFeedDto.page * 20);
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

        return video;
    }
}
