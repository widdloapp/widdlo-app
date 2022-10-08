import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {LikeVideoDto} from "../dto/like-video.dto";
import {Like} from "./like.schema";

@Injectable()
export class LikeService {
    constructor(@InjectModel('Like') private likeModel: Model<Like>) { }

    async likeVideo(likeVideoDto: LikeVideoDto): Promise<Like> {
        const user = await new this.likeModel(likeVideoDto);
        return user.save();
    }
}
