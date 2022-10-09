import {IsMongoId, IsNotEmpty} from "class-validator";

export class FollowChannelDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly channel: string;

    user: string;
}