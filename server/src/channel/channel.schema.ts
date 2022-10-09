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

    @Prop()
    name: string;

    @Prop()
    description: string;

    _id: string;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel).index({user: 1}, { unique: true });