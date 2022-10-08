import {IsNotEmpty, IsString, MaxLength} from "class-validator";

export class LoginRequestDto {
    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}