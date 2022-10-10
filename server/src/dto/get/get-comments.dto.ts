import {IsMongoId, IsNotEmpty} from "class-validator";

export class GetCommentsDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly target: string;
}