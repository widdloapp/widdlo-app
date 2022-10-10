import {IsMongoId, IsNotEmpty} from "class-validator";

export class GetFollowDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly channel: string;
}