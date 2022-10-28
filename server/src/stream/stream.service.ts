import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Stream} from "stream";
import generatePassword from "../password";
import {KeyQueryDto} from "../dto/get/key-query.dto";

@Injectable()
export class StreamService {
    constructor(@InjectModel('Stream') private streamModel: Model<Stream>) { }
    async getUserStream(keyQueryDto: KeyQueryDto): Promise<Stream> {
        const stream = await this.streamModel.findOne({channel: keyQueryDto.id}).select("key");

        if (stream == null) {
            return await this.createStream(keyQueryDto);
        }

        return stream;
    }
    async getStreamKey(keyQueryDto: KeyQueryDto): Promise<Stream> {
        const stream = await this.streamModel.findOne({channel: keyQueryDto.id}).select(["key"]);

        return stream;
    }

    async createStream(keyQueryDto: KeyQueryDto) {
        return await this.streamModel.create({
            channel: keyQueryDto.id,
            key: generatePassword(),
        });
    }
}
