import {IsBooleanString, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

export class CreateVideoDto {
    @IsString()
    @MaxLength(16)
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @MaxLength(300)
    @IsNotEmpty()
    readonly description: string;

    @IsOptional()
    @IsBooleanString()
    readonly hidden: boolean;

    @IsNotEmpty()
    readonly channel: string;
}