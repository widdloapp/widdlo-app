import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Channel} from "./channel.schema";
import {CreateChannelDto} from "../dto/create/create-channel.dto";
import {ChannelInfoDto} from "../dto/create/channel-info.dto";

@Injectable()
export class ChannelService {
    constructor(@InjectModel('Channel') private channelModel: Model<Channel>) { }
    async createChannel(createChannelDto: CreateChannelDto): Promise<Channel> {
        const channel = await new this.channelModel(createChannelDto);
        return channel.save();
    }

    async getChannelInfo(channelInfoDto: ChannelInfoDto): Promise<Channel> {
        const channel = await this.channelModel.findById(channelInfoDto.id).select(["user", "name", "description"])
            .populate("stream").populate("chats", ["name"]);

        if (!channel) {
            throw new NotFoundException('Channel could not found!');
        }

        return channel;
    }
    async checkExists(channel: string) {
        return this.channelModel.exists({_id: channel});
    }
}