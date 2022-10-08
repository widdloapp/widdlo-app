import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { User, UserSchema } from './user.schema';
import {Type} from "class-transformer";

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

    @Prop({ type: UserSchema })
    @Type(() => User)
    author: User;
}

export const VideoSchema = SchemaFactory.createForClass(Video);