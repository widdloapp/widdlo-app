import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Stream} from "stream";

@Injectable()
export class StreamService {
    constructor(@InjectModel('Stream') private streamModel: Model<Stream>) { }
    async getUserStream(user: string): Promise<Stream> {
        const stream = await this.streamModel.findOne({user: user});

        return stream;
    }
    async getStreamKey(path: string): Promise<Stream> {
        const stream = await this.streamModel.findOne({path: path}).select(["key"]);

        return stream;
    }

    async createStream(id: string) {
        return await this.streamModel.create({
            user: id,
        });
    }
}
