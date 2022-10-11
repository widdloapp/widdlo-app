import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class Playlist {
    @Prop({ default: Date.now() })
    date: Date;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop({default: false})
    hidden: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string;
}

const PlaylistSchema = SchemaFactory.createForClass(Playlist);

PlaylistSchema.virtual('videos', {
    ref: 'PlaylistVideo',
    localField: '_id',
    foreignField: 'playlist'
});

export { PlaylistSchema };