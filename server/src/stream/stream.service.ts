import {HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Stream} from "stream";
import {HttpException} from "@nestjs/common/exceptions/http.exception";

@Injectable()
export class StreamService {
    constructor(@InjectModel('Stream') private streamModel: Model<Stream>) { }
    async getStreamKey(user: string): Promise<Stream> {
        const stream = await this.streamModel.findOne({user: user}).select(["key"]);

        return stream;
    }

    async createStream(id: string) {
        try {
            return await this.streamModel.create({
                user: id,
            });
        } catch (error) {
            console.log(error)
            throw new HttpException("An stream for this account already exists.", HttpStatus.CONFLICT);
        }
    }
}
