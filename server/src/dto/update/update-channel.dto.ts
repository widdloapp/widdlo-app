import {IsMongoId, IsNotEmpty, IsOptional} from "class-validator";
import {CreateChannelDto} from "../create/create-channel.dto";
import {PickType} from "@nestjs/swagger";

export class UpdateChannelDto extends PickType(CreateChannelDto, ['name', 'username']) {
    id: string;

    @IsOptional()
    name: string;

    @IsOptional()
    username: string;
}