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
