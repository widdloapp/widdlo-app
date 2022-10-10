import {IsMongoId, IsNotEmpty} from "class-validator";
import {PickType} from "@nestjs/swagger";
import {CreateChannelDto} from "../create/create-channel.dto";

export class UpdateChannelDto extends PickType(CreateChannelDto, ['name', 'description']) {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    id: string;
}