import {IsMongoId, IsNotEmpty, IsOptional} from "class-validator";

export class CheckStreamDto {
    @IsNotEmpty()
    path: string;

    @IsOptional()
    password: string;
}