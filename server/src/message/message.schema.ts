import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {User} from "../user/user.schema";
import mongoose from "mongoose";
import {Chat} from "../chat/chat.schema";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class Message {
    @Prop({ default: Date.now() })
    date: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' })
    chat: Chat;

    @Prop()
    body: string;

    @Prop()
    avatar: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);