import {CreateMessageDto} from "../create/create-message.dto";
import {IsNotEmpty} from "class-validator";
import {PickType} from "@nestjs/swagger";

export class UpdateMessageDto extends PickType(CreateMessageDto, ['body']) {
    @IsNotEmpty()
    id: string;
}