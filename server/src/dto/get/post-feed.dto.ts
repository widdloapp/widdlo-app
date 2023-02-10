import {IsOptional} from "class-validator";

export class PostFeedDto {
    @IsOptional()
    readonly sort: string;

    @IsOptional()
    readonly page: number;
}