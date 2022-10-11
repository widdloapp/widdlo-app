import {IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

export class CreatePlaylistDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @MaxLength(500)
    @IsOptional()
    readonly description: string;

    user: string;
}