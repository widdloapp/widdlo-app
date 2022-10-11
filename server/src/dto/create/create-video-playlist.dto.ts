import {IsMongoId, IsNotEmpty} from "class-validator";

export class CreateVideoPlaylistDto {
    @IsMongoId()
    @IsNotEmpty()
    readonly playlist: string;

    @IsMongoId()
    @IsNotEmpty()
    readonly video: string;
}