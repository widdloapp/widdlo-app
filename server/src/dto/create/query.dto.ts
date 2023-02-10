import {Transform} from "class-transformer";
import {IsNumber, IsOptional, IsString} from "class-validator";
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class QueryDto {
    @Field({nullable: true})
    @IsOptional()
    @IsNumber()
    @Transform(value => Number(value.value))
    readonly page: number = 0;

    @Field({nullable: true})
    @IsOptional()
    @IsString()
    readonly order: string;
}