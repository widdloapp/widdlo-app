import {IsNotEmpty, IsString, MaxLength} from "class-validator";

export class CreateChatDto {
    @IsString()
    @MaxLength(15)
    @IsNotEmpty()
    readonly name: string;

    channel: string;
}