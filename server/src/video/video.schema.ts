import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {User} from "../user/user.schema";
import mongoose from "mongoose";

export type VideoDocument = Video & Document;

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class Video {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({default: 0})
    views: number;

    @Prop()
    tags: string[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author: User;
}

const VideoSchema = SchemaFactory.createForClass(Video);

VideoSchema.virtual('likes').get(function (this: VideoDocument) {
    return "eeeeeeee";
});

export { VideoSchema };