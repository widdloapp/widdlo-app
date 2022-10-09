import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Follow} from "./follow.schema";
import {FollowChannelDto} from "../dto/follow-channel.dto";

@Injectable()
export class FollowService {
    constructor(@InjectModel('Follow') private followModel: Model<Follow>) { }

    async followChannel(followChannelDto: FollowChannelDto): Promise<Follow> {
        const like = await new this.followModel(followChannelDto);
        return like.save();
    }
}
