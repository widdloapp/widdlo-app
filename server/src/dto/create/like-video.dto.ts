import {IsMongoId, IsNotEmpty} from "class-validator";

export class LikeVideoDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly target: string;

    author: string;
}