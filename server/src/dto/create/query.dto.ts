import {Transform} from "class-transformer";
import {IsNumber, IsOptional, IsString} from "class-validator";

export class QueryDto {
    @IsOptional()
    @IsNumber()
    @Transform(value => Number(value.value))
    readonly page: number = 0;

    @IsOptional()
    @IsString()
    readonly order: string;
}