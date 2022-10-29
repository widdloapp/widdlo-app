import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Stream} from "stream";
import generatePassword from "../password";

@Injectable()
export class StreamService {
    constructor(@InjectModel('Stream') private streamModel: Model<Stream>) { }
    /*async getUserStream(keyQueryDto: KeyQueryDto): Promise<Stream> {
        const stream = this.getStream(keyQueryDto.id);

        if (stream == null) {
            return await this.createStream(keyQueryDto);
        }

        return stream;
    }*/
    async getStreamChannel(id: string) {
        const stream = await this.streamModel.findOne({channel: id});

        if (!stream) {
            return await this.createStream(id);
        }

        return stream;
    }
    async createStream(id: string) {
        return await this.streamModel.create({
            channel: id,
            key: generatePassword(),
        });
    }
    async getPublicChannelStream(id: string) {
        const stream = await this.streamModel.findOne({channel: id}).select("id");

        return stream;
    }
    async getStream(id: string) {
        const stream = await this.streamModel.findById(id);

        return stream;
    }
}
