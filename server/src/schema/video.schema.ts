import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

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
}

export const VideoSchema = SchemaFactory.createForClass(Video);