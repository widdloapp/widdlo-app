import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose";
import {Badge} from "./badge.schema";
import {Channel} from "../channel/channel.schema";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class ChannelBadge {
    @Prop({ default: Date.now() })
    date: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' })
    channel: Channel;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' })
    badge: Badge;
}

export const ChannelBadgeSchema = SchemaFactory.createForClass(ChannelBadge);