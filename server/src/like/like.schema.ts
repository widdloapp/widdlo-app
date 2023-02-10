import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {User} from "../user/user.schema";
import mongoose from "mongoose";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class Like {
    @Prop({ default: Date.now() })
    date: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author: User;

    @Prop()
    target: string;
}

export const LikeSchema = SchemaFactory.createForClass(Like).index({author: 1, target: 1}, { unique: true });