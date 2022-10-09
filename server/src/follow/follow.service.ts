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
    async checkExists(followChannelDto: FollowChannelDto) {
        return this.followModel.exists({channel: followChannelDto.channel});
    }
    async unfollowChannel(followChannelDto: FollowChannelDto) {
        return this.followModel.deleteOne({channel: followChannelDto.channel});
    }
    async getFollowing(user: string) {
        return this.followModel.find({user: user}).select(["channel"]).populate({path: 'channel', select: ["name"], populate: {path: 'stream'}})
    }
}
