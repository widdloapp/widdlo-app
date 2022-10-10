import {IsMongoId, IsNotEmpty} from "class-validator";

export class GetMessageDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly id: string;
}