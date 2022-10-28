import {StreamService} from "./stream.service";
import {CheckStreamDto} from "../dto/create/check-stream.dto";
import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpStatus,
    NotFoundException, Param,
    Post, Query,
    Res,
    Response
} from "@nestjs/common";
import {KeyQueryDto} from "../dto/get/key-query.dto";

@Controller('stream')
export class StreamController {
    constructor(private readonly streamService: StreamService) { }

    @Get()
    async getStreamKey(@Res() response, @Query() keyQueryDto: KeyQueryDto) {
        const stream = await this.streamService.getStreamChannel(keyQueryDto.id);

        if (!stream) {
            throw new NotFoundException('Stream could not found!');
        }

        return response.status(HttpStatus.CREATED).json({
            message: 'Stream data retrieved successfully', stream
        });
    }

    @Post()
    async checkStreamKey(@Response() response, @Body() checkStreamDto: CheckStreamDto) {
        const stream = await this.streamService.getStream(checkStreamDto.path);


        if (!stream) {
            throw new NotFoundException('Stream could not found!');
        }

        // @ts-ignore
        if (stream.key == checkStreamDto.password) {
            return response.status(HttpStatus.OK).json({
                message: 'Valid stream key.'
            });
        }

        throw new BadRequestException("Invalid key.");
    }
}
