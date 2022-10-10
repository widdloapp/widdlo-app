import {Transform} from "class-transformer";
import {IsNumber} from "class-validator";

export class QueryDto {
    @IsNumber()
    @Transform(value => Number(value.value))
    readonly page: number;
}