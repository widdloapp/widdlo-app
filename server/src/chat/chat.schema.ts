import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose";
import {Channel} from "diagnostics_channel";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class Chat {
    @Prop({ default: Date.now() })
    date: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' })
    channel: Channel;

    @Prop()
    name: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);