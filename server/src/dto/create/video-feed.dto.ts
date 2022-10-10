import {IsNotEmpty, IsOptional} from "class-validator";

export class VideoFeedDto {
    @IsNotEmpty()
    readonly sort: string;

    @IsOptional()
    readonly page: number;
}