import {IsMongoId, IsNotEmpty, IsNumber} from "class-validator";

export class GetCommentsDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly target: string;

    @IsNotEmpty()
    @IsNumber()
    readonly page: number = 0;
}