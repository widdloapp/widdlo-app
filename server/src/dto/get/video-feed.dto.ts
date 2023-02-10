import {IsOptional} from "class-validator";
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class VideoFeedDto {
    @Field({nullable: true})
    @IsOptional()
    readonly sort: string;

    @Field({nullable: true})
    @IsOptional()
    readonly page: number;
}