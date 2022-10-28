import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose";
import {Channel} from "../channel/channel.schema";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }} })
export class Stream {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' })
    channel: Channel;

    @Prop()
    key: string;
}

export const StreamSchema = SchemaFactory.createForClass(Stream).index({user: 1}, { unique: true });