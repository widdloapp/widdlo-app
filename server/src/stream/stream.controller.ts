import {StreamService} from "./stream.service";
import {CheckStreamDto} from "../dto/create/check-stream.dto";
import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpStatus,
    NotFoundException,
    Post,
    Res,
    Response
} from "@nestjs/common";
import {KeyQueryDto} from "../dto/get/key-query.dto";

@Controller('stream')
export class StreamController {
    constructor(private readonly streamService: StreamService) { }

    @Get()
    async getStreamKey(@Res() response) {
        const stream = await this.streamService.getUserStream(response.locals.user);

        if (!stream) {
            throw new NotFoundException('Stream could not found!');
        }

        return response.status(HttpStatus.CREATED).json({
            message: 'Stream data retrieved successfully', stream
        });
    }

    @Post()
    async checkStreamKey(@Response() response, @Body() checkStreamDto: CheckStreamDto, @Body() keyQueryDto: KeyQueryDto) {
        const stream = await this.streamService.getStreamKey(keyQueryDto);


        if (!stream) {
            throw new NotFoundException('Stream could not found!');
        }

        // @ts-ignore
        if (stream.key == checkStreamDto.password) {
            return response.status(HttpStatus.OK).json({
                message: 'Valid stream key.', stream
            });
        }

        throw new BadRequestException("Invalid key.");
    }
}
