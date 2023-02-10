import {IsMongoId, IsNotEmpty} from "class-validator";
import {PickType} from "@nestjs/swagger";
import {CreatePostDto} from "../create/create-post.dto";

export class UpdatePostDto extends PickType(CreatePostDto, ['body']) {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    id: string;
}