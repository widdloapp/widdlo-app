import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Video} from "./video.schema";
import {CreateVideoDto} from "../dto/create/create-video.dto";
import {VideoFeedDto} from "../dto/create/video-feed.dto";
import {GetVideoDto} from "../dto/get/get-video.dto";
import {QueryDto} from "../dto/create/query.dto";
import {UpdateVideoDto} from "../dto/update/update-video.dto";

@Injectable()
export class VideoService {
    constructor(@InjectModel('Video') private videoModel: Model<Video>) { }
    async createVideo(createVideoDto: CreateVideoDto): Promise<Video> {
        const user = await new this.videoModel(createVideoDto);
        return user.save();
    }

    async getVideoFeed(videoFeedDto: VideoFeedDto, queryDto: QueryDto): Promise<Video[]> {
        const videos = await this.videoModel.find({hidden: false, deleted: false}).select(["title", "description", "views", "likes"])
            .populate({path: 'channel', select: ['name', 'avatar'], populate: {path: 'followers'}}).populate('likes').limit(30).skip(queryDto.page * 30);
        if (!videos || videos.length == 0) {
            throw new NotFoundException("No videos found.");
        }

        return videos;
    }

    async getVideo(getVideoDto: GetVideoDto): Promise<Video> {
        const video = await this.videoModel.findOne({_id: getVideoDto.id, deleted: false}).select(["title", "description", "views", "likes"])
            .populate({path: 'channel', select: ['name', 'avatar'], populate: {path: 'followers'}}).populate('likes');
        if (!video) {
            throw new NotFoundException('Unknown video!');
        }

        await video.update({views: video.views + 1})

        return video;
    }
    async updateVideo(user: string, updateVideoDto: UpdateVideoDto) {
        const message = await this.videoModel.findOneAndUpdate({_id: updateVideoDto.id, author: user}, updateVideoDto, {new: true});

        if (!message) {
            throw new NotFoundException("Unknown video or invalid authentication.");
        }

        return message;
    }
    async deleteVideo(user: string, getVideoDto: GetVideoDto) {
        const video = await this.videoModel.findOneAndUpdate({_id: getVideoDto.id, author: user, deleted: false}, {deleted: true});

        if (!video) {
            throw new NotFoundException('Unknown video or invalid authentication.');
        }
    }
}
