import {IsNotEmpty, IsString, Matches, MaxLength} from "class-validator";

export class CreateVideoDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @MaxLength(300)
    @IsNotEmpty()
    @Matches(/[^A-Za-z0-9]+/, {message: "cannot contain invalid characters"})
    readonly description: string;
}