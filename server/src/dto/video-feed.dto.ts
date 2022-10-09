import {IsNotEmpty, IsNumber} from "class-validator";

export class VideoFeedDto {
    @IsNotEmpty()
    @IsNumber()
    readonly page: number = 0;

    @IsNotEmpty()
    readonly sort: string;
}