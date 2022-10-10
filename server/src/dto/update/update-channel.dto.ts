import {IsMongoId, IsNotEmpty} from "class-validator";
import {CreateChannelDto} from "../create/create-channel.dto";
import {PartialType, PickType} from "@nestjs/swagger";

export class UpdateChannelDto extends PartialType(CreateChannelDto) {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    id: string;
}