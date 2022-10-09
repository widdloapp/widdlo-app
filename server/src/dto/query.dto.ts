import {IsNumber, IsOptional} from "class-validator";
import {Type} from "class-transformer";

export class QueryDto {
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly page: number;
}