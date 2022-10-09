import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {User} from "../user/user.schema";
import mongoose from "mongoose";
import {Like} from "../like/like.schema";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }} })
export class Video {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    tags: string[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author: User;
}

const VideoSchema = SchemaFactory.createForClass(Video);

VideoSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'video',
    count: true
});

export { VideoSchema };