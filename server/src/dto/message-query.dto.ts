import {IsMongoId, IsNotEmpty} from "class-validator";

export class MessageQueryDto {
    @IsMongoId({message: "invalid id"})
    @IsNotEmpty()
    readonly chat: string;
}