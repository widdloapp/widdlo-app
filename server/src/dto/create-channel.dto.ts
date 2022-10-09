import {IsEmail, IsEmpty, IsMongoId, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from "class-validator";

export class CreateChannelDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @MaxLength(12)
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @MaxLength(300)
    @IsNotEmpty()
    @IsOptional()
    readonly description: string;

    user: string;
}