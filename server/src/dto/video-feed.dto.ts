import {IsNotEmpty, IsNumber, IsOptional} from "class-validator";

export class VideoFeedDto {
    @IsNumber()
    @IsOptional()
    readonly page;

    @IsNotEmpty()
    readonly sort: string;
}