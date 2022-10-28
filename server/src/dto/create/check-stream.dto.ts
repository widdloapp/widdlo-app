import {IsMongoId, IsNotEmpty, IsOptional} from "class-validator";

export class CheckStreamDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    path: string;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    action: string;
}