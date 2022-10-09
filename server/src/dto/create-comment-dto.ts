import {IsMongoId, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class CreateCommentDto {
    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    readonly body: string;

    author: string;

    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly target: string;
}