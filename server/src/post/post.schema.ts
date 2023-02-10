import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose";
import {Channel} from "../channel/channel.schema";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }} })
export class Post {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' })
    author: Channel;

    @Prop()
    body: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);