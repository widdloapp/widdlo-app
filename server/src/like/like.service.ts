import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {LikeVideoDto} from "../dto/create/like-video.dto";
import {Like} from "./like.schema";

@Injectable()
export class LikeService {
    constructor(@InjectModel('Like') private likeModel: Model<Like>) { }

    async likeVideo(likeVideoDto: LikeVideoDto): Promise<Like> {
        const like = await new this.likeModel(likeVideoDto);
        return like.save();
    }
    async checkExists(likeVideoDto: LikeVideoDto) {
        return this.likeModel.exists({target: likeVideoDto.target, author: likeVideoDto.author});
    }
    async unlikeVideo(likeVideoDto: LikeVideoDto) {
        return this.likeModel.deleteOne({target: likeVideoDto.target, author: likeVideoDto.author});
    }
}
