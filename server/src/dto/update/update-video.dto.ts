import {IsMongoId, IsNotEmpty, IsOptional} from "class-validator";
import {PartialType} from "@nestjs/swagger";
import {CreateVideoDto} from "../create/create-video.dto";

export class UpdateVideoDto extends PartialType(CreateVideoDto) {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    id: string;

    @IsOptional()
    description: string;
}