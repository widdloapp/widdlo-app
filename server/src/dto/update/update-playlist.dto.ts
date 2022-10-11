import {IsMongoId, IsNotEmpty, IsOptional} from "class-validator";
import {PickType} from "@nestjs/swagger";
import {CreatePlaylistDto} from "../create/create-playlist.dto";

export class UpdatePlaylistDto extends PickType(CreatePlaylistDto, []) {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    id: string;
}