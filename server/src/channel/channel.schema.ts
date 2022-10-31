import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {User} from "../user/user.schema";
import mongoose from "mongoose";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class Channel {
    @Prop({ default: Date.now() })
    date: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop()
    username: string;

    @Prop({default: 0})
    views: number;

    @Prop()
    description: string;
    
    avatar: string;

    _id: string;
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

export { ChannelSchema };