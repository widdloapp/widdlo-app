import {IsNotEmpty, IsString, MaxLength} from "class-validator";

export class CreatePostDto {
    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    readonly body: string;

    author: string;
}