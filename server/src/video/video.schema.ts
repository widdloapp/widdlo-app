import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {User} from "../user/user.schema";
import mongoose from "mongoose";

@Schema()
export class Video {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    views: number;

    @Prop()
    tags: string[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author: User;
}

export const VideoSchema = SchemaFactory.createForClass(Video);