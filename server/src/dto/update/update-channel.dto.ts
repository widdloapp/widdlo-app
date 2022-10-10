import {IsMongoId, IsNotEmpty, IsOptional} from "class-validator";
import {CreateChannelDto} from "../create/create-channel.dto";
import {PartialType} from "@nestjs/swagger";

export class UpdateChannelDto extends PartialType(CreateChannelDto) {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    id: string;

    @IsOptional()
    name: string;

    @IsOptional()
    username: string;
}