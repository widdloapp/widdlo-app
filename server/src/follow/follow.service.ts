import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Follow} from "./follow.schema";
import {FollowChannelDto} from "../dto/create/follow-channel.dto";
import {GetFollowDto} from "../dto/get/get-follow.dto";
import {UserInfoDto} from "../dto/get/user-info.dto";

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
    async getFollow(userInfoDto: UserInfoDto, getFollowDto: GetFollowDto) {
        const follow = await this.followModel.findOne({user: userInfoDto.id, channel: getFollowDto.channel}).select(["channel", "date"]);

        if (!follow) {
            throw new NotFoundException("This user is not following this channel.");
        }

        return follow;
    }
}
