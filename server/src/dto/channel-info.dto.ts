import {IsMongoId, IsNotEmpty} from "class-validator";

export class ChannelInfoDto {
    @IsMongoId({message: "invalid id"})
    @IsNotEmpty()
    readonly id: string;
}