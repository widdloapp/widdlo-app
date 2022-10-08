import {IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength} from "class-validator";

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
    @MinLength(40)
    @MaxLength(80)
    @IsNotEmpty()
    @Matches(/((?=.\d)|(?=.\W+))(?![.\n])(?=.[A-Z])(?=.[a-z]).*$/, {message: 'password too weak'})
    readonly password: string;
}