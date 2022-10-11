import {IsMongoId, IsNotEmpty, IsOptional} from "class-validator";
import {PickType} from "@nestjs/swagger";
import {CreateCommentDto} from "../create/create-comment.dto";

export class UpdateCommentDto extends PickType(CreateCommentDto, ['body']) {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    id: string;

    @IsOptional()
    body: string;
}