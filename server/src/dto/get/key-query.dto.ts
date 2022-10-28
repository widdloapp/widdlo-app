import {IsMongoId, IsNotEmpty} from "class-validator";

export class KeyQueryDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly id: string;
}