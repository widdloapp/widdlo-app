import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose";
import {Channel} from "../channel/channel.schema";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class Subscription {
    @Prop({ default: Date.now() })
    date: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' })
    channel: Channel;

    type: number;

    @Prop()
    expires: Date;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription).index({author: 1, type: 1}, { unique: true });