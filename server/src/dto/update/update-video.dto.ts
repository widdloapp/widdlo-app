import {IsMongoId, IsNotEmpty} from "class-validator";
import {PickType} from "@nestjs/swagger";
import {CreateVideoDto} from "../create/create-video.dto";

export class UpdateVideoDto extends PickType(CreateVideoDto, ['title', 'description', 'hidden']) {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    id: string;
}