import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose";
import {Channel} from "../channel/channel.schema";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class Comment {
    @Prop({ default: Date.now() })
    date: Date;

    @Prop()
    body: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' })
    author: Channel;

    @Prop()
    target: string;
}

const CommentSchema = SchemaFactory.createForClass(Comment).index({author: 1, target: 1}, { unique: true });

CommentSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'target',
    count: true
});

CommentSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'target',
    count: true
});

export { CommentSchema };