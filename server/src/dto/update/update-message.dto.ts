import {CreateMessageDto} from "../create/create-message.dto";
import {IsMongoId, IsNotEmpty, IsOptional} from "class-validator";
import {PickType} from "@nestjs/swagger";

export class UpdateMessageDto extends PickType(CreateMessageDto, ['body']) {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    id: string;

    @IsOptional()
    body: string;
}