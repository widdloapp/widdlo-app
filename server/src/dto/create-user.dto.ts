import {IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly username: string;

    @IsEmail()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(80)
    @IsNotEmpty()
    readonly password: string;
}