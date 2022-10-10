import {Transform} from "class-transformer";
import {IsNumber, IsOptional} from "class-validator";

export class QueryDto {
    @IsOptional()
    @IsNumber()
    @Transform(value => Number(value.value))
    readonly page: number;
}