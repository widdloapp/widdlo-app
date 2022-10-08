import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {LikeVideoDto} from "../dto/like-video.dto";
import {Like} from "./like.schema";

@Injectable()
export class LikeService {
    constructor(@InjectModel('Like') private videoModel: Model<Like>) { }

    async likeVideo(likeVideoDto: LikeVideoDto): Promise<Like> {
        const user = await new this.videoModel(likeVideoDto);
        return user.save();
    }
}
