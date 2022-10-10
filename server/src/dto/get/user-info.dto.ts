import {IsMongoId, IsNotEmpty} from "class-validator";

export class UserInfoDto {
    @IsMongoId({message: "invalid id"})
    @IsNotEmpty()
    readonly id: string;
}