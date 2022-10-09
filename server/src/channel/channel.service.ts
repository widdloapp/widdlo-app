import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Channel} from "./channel.schema";
import {CreateChannelDto} from "../dto/create-channel.dto";
import {ChannelInfoDto} from "../dto/channel-info.dto";

@Injectable()
export class ChannelService {
    constructor(@InjectModel('Channel') private channelModel: Model<Channel>) { }
    async createChannel(createChannelDto: CreateChannelDto): Promise<Channel> {
        const channel = await new this.channelModel(createChannelDto);
        return channel.save();
    }

    async getChannelInfo(channelInfoDto: ChannelInfoDto): Promise<Channel> {
        const channel = await this.channelModel.findById(channelInfoDto.id).select(["user", "name", "description"]);

        if (!channel) {
            throw new NotFoundException('Channel could not found!');
        }

        return channel;
    }
}
