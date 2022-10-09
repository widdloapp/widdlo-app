import {IsMongoId, IsNotEmpty, IsNumber, IsOptional} from "class-validator";

export class MessageQueryDto {
    @IsNumber()
    @IsOptional()
    readonly page;

    @IsMongoId({message: "invalid id"})
    @IsNotEmpty()
    readonly chat: string;
}