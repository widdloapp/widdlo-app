import {IsEmail, IsNotEmpty, IsString, Length, MaxLength} from "class-validator";
import {Transform} from "class-transformer";

const bcrypt = require('bcrypt');

export class CreateUserDto {
    @IsString()
    @MaxLength(80)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @MaxLength(80)
    @IsNotEmpty()
    readonly username: string;

    @IsEmail()
    @MaxLength(80)
    @IsNotEmpty()
    readonly email: string;

    @Transform((value) => bcrypt.hashSync(value.value, 10))
    @IsString()
    @Length(6, 80)
    @IsNotEmpty()
    readonly password: string;
}