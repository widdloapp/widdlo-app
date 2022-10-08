import {IsMongoId, IsNotEmpty} from "class-validator";

export class LikeVideoDto {
    @IsNotEmpty()
    @IsMongoId()
    readonly author: string;

    @IsNotEmpty()
    @IsMongoId()
    readonly video: string;
}