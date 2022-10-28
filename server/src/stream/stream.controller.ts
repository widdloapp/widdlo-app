import {StreamService} from "./stream.service";
import {CheckStreamDto} from "../dto/create/check-stream.dto";
import {
    BadRequestException,
    Body,
    Controller,
    Get, HttpCode,
    HttpStatus,
    NotFoundException,
    Post,
    Res,
    Response
} from "@nestjs/common";
import {HttpException} from "@nestjs/common/exceptions/http.exception";

@Controller('stream')
export class StreamController {
    constructor(private readonly streamService: StreamService) { }

    @Get()
    async getStreamKey(@Res() response) {
        const stream = await this.streamService.getStreamChannel(response.locals.channel);

        if (!stream) {
            throw new NotFoundException('Stream could not found!');
        }

        return response.status(HttpStatus.CREATED).json({
            message: 'Stream data retrieved successfully', stream
        });
    }

    @Post()
    async checkStreamKey(@Response() response, @Body() checkStreamDto) {
        if (checkStreamDto.action == 'read') {
            throw new HttpException("Read approved.", HttpStatus.OK);
        }

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
