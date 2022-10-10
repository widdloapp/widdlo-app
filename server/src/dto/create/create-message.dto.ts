import {IsMongoId, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class CreateMessageDto {
    @IsString()
    @MaxLength(600)
    @IsNotEmpty()
    readonly body: string;

    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    chat: string;

    author: string;
}