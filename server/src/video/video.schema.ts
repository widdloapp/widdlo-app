import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {Field, ObjectType} from "@nestjs/graphql";
import {Channel} from "../channel/channel.schema";
import mongoose from "mongoose";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }} })
@ObjectType()
export class Video {
    @Field()
    id: string;

    @Prop()
    @Field()
    title: string;

    @Prop()
    @Field()
    description: string;

    @Prop({default: 0})
    @Field()
    views: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' })
    @Field()
    channel: Channel;

    @Prop()
    @Field()
    thumbnail: string;

    @Prop()
    @Field()
    source: string;

    @Prop({default: Date.now()})
    @Field()
    date: Date;

    @Field()
    likes: number;

    @Prop({default: false})
    hidden: boolean;

    @Prop({default: false})
    deleted: boolean;
}

const VideoSchema = SchemaFactory.createForClass(Video);

VideoSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'target',
    count: true
});

export { VideoSchema };