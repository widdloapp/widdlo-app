import {IsNotEmpty, IsNumber, IsOptional} from "class-validator";

export class VideoFeedDto {
    @IsNotEmpty()
    readonly sort: string;
}