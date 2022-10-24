import {IsBooleanString, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

export class CreateVideoDto {
    @IsOptional()
    @IsBooleanString()
    readonly hidden: boolean;

    channel: string;

    thumbnail: string;

    source: string;
}