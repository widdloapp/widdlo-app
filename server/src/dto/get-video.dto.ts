import {IsMongoId, IsNotEmpty} from "class-validator";

export class GetVideoDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly id: string;
}