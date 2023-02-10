import {IsMongoId, IsNotEmpty} from "class-validator";

export class GetPostDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly id: string;
}