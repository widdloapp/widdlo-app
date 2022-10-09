import {IsEnum, IsIn, IsNotEmpty, IsNumber, Matches} from "class-validator";

const short = {"newer": {createdAt: -1}};

export class VideoFeedDto {
    @IsNotEmpty()
    @IsNumber()
    readonly page: number = 0;

    @IsNotEmpty()
    readonly sort: string;
}