import {IsMongoId, IsNotEmpty} from "class-validator";

export class GetPlaylistDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly id: string;
}