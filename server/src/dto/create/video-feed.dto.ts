import {IsNotEmpty} from "class-validator";

export class VideoFeedDto {
    @IsNotEmpty()
    readonly sort: string;
}