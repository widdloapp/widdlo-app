import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {Like} from "../like/like.schema";
import {Channel} from "../channel/channel.schema";
import mongoose from "mongoose";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }} })
export class Video {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop( {default: 0} )
    views: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' })
    channel: Channel;

    @Prop({ default: false })
    hidden: boolean;

    @Prop()
    thumbnail: string;

    @Prop()
    source: string;

    @Prop({ default: false })
    deleted: boolean;

    @Prop({ default: Date.now() })
    date: Date;
}

const VideoSchema = SchemaFactory.createForClass(Video);

VideoSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'video',
    count: true
});

export { VideoSchema };