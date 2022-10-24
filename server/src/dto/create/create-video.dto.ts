import {IsBooleanString, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

export class CreateVideoDto {
    @IsOptional()
    readonly title: string;

    @IsString()
    @MaxLength(300)
    @IsOptional()
    readonly description: string;

    @IsOptional()
    @IsBooleanString()
    readonly hidden: boolean;

    channel: string;

    thumbnail: string;

    source: string;
}