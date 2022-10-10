import {IsMongoId, IsNotEmpty} from "class-validator";
import {PartialType} from "@nestjs/swagger";
import {CreateMessageDto} from "./create-message.dto";

export class UpdateMessageDto {
    @IsMongoId({message: "invalid id"})
    @IsNotEmpty()
    readonly id: string;
}