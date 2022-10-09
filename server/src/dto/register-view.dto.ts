import {IsMongoId, IsNotEmpty} from "class-validator";

export class RegisterViewDto {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    readonly video: string;

    user: string;
}