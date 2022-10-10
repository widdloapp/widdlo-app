import {IsMongoId, IsNotEmpty} from "class-validator";

export class UpdateMessageDto {
    @IsMongoId({message: "invalid id"})
    @IsNotEmpty()
    readonly id: string;

    @IsNotEmpty()
    readonly body: string;
}