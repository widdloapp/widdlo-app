import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Video} from "./video.schema";
import {CreateVideoDto} from "../dto/create-video.dto";

@Injectable()
export class VideoService {
    constructor(@InjectModel('Video') private videoModel: Model<Video>) { }
    async createVideo(createVideoDto: CreateVideoDto): Promise<Video> {
        const user = await new this.videoModel(createVideoDto);
        return user.save();
    }

    async getAllVideos(): Promise<Video[]> {
        const videoData = await this.videoModel.find().select(["title", "description", "views", "likes"])
            .populate('author', ["username"]).populate('likes');
        if (!videoData || videoData.length == 0) {
            throw new NotFoundException('Videos data not found!');
        }

        return videoData;
    }
}
