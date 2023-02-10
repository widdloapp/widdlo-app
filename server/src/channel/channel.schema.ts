import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {User} from "../user/user.schema";
import mongoose from "mongoose";
import {Field, ObjectType} from "@nestjs/graphql";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
@ObjectType()
export class Channel {
    @Prop({ default: Date.now() })
    @Field()
    date: Date;

    @Field()
    id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    @Field()
    user: User;

    @Prop()
    @Field()
    username: string;

    @Prop({default: 0})
    @Field()
    views: number;

    @Prop()
    @Field()
    description: string;

    @Prop({default: false})
    @Field()
    verified: boolean;

    @Field()
    avatar: string;

    @Field()
    _id: string;

    @Field()
    followers: number;
}

const ChannelSchema = SchemaFactory.createForClass(Channel).index({user: 1, username: 1}, { unique: true });

ChannelSchema.virtual('stream', {
    ref: 'Stream',
    localField: '_id',
    foreignField: 'channel'
});

ChannelSchema.virtual('chats', {
    ref: 'Chat',
    localField: '_id',
    foreignField: 'channel'
});

ChannelSchema.virtual('followers', {
    ref: 'Follow',
    localField: '_id',
    foreignField: 'channel',
    count: true
});

ChannelSchema.virtual('subscriptions', {
    ref: 'Subscription',
    localField: '_id',
    foreignField: 'channel'
});

ChannelSchema.virtual('badges', {
    ref: 'ChannelBadge',
    localField: '_id',
    foreignField: 'channel'
});

export { ChannelSchema };