import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose from "mongoose";
import {Video} from "../video/video.schema";
import {Playlist} from "./playlist.schema";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class PlaylistVideo {
    @Prop({ default: Date.now() })
    date: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' })
    playlist: Playlist;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Video' })
    video: Video;
}

const PlaylistVideoSchema = SchemaFactory.createForClass(PlaylistVideo).index({playlist: 1, video: 1}, { unique: true });

export { PlaylistVideoSchema };