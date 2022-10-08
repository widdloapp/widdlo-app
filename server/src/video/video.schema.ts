import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {User} from '../user/user.schema';

@Schema()
export class Video {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    views: number;

    @Prop()
    tags: string[];

    @Prop()
    author: string;
}

export const VideoSchema = SchemaFactory.createForClass(Video);