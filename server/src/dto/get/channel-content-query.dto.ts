import {IsMongoId, IsNotEmpty, IsString} from "class-validator";

export class ChannelContentQueryDto {
    @IsNotEmpty()
    @IsString()
    @IsMongoId({message: "Invalid id"})
    readonly channel: string;
}