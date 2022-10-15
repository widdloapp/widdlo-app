import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Channel} from "./channel.schema";
import {CreateChannelDto} from "../dto/create/create-channel.dto";
import {ChannelInfoDto} from "../dto/create/channel-info.dto";
import {UpdateChannelDto} from "../dto/update/update-channel.dto";

@Injectable()
export class ChannelService {
    constructor(@InjectModel('Channel') private channelModel: Model<Channel>) { }
    async createChannel(createChannelDto: CreateChannelDto): Promise<Channel> {
        const channel = await new this.channelModel(createChannelDto);
        return channel.save();
    }

    async getChannelInfo(channelInfoDto: ChannelInfoDto): Promise<Channel> {
        const channel = await this.channelModel.findById(channelInfoDto.channel).select(["user", "name", "avatar", "description", "views", "date"])
            .populate("followers").populate("stream").populate("chats", ["name"]);

        if (!channel) {
            throw new NotFoundException('Channel could not found!');
        }

        await channel.update({views: channel.views + 1});

        return channel;
    }
    async checkExists(channel: string) {
        return this.channelModel.exists({_id: channel});
    }
    async updateChannel(user: string, updateChannelDto: UpdateChannelDto) {
        const channel = await this.channelModel.findOneAndUpdate({_id: updateChannelDto.id, user: user}, updateChannelDto, {new: true});

        if (!channel) {
            throw new NotFoundException("Unknown channel or invalid authentication.");
        }

        return channel;
    }
}