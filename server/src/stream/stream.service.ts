import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Stream} from "stream";

@Injectable()
export class StreamService {
    constructor(@InjectModel('Stream') private streamModel: Model<Stream>) { }
    async getStreamKey(user: string): Promise<Stream> {
        const stream = await this.streamModel.findOne({user: user}).select(["key"]);

        return stream;
    }
}
