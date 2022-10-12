import {IsOptional} from "class-validator";

export class VideoFeedDto {
    @IsOptional()
    readonly sort: string;

    @IsOptional()
    readonly page: number;
}