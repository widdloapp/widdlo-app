import {IsEmail, IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class CreateChannelDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @MaxLength(12)
    @IsNotEmpty()
    readonly username: string;

    user: string;
}