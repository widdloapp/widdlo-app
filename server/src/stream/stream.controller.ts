import {StreamService} from "./stream.service";
import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpStatus,
    NotFoundException, Param,
    Post,
    Res,
    Response
} from "@nestjs/common";
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {KeyQueryDto} from "../dto/get/key-query.dto";

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

    @Get(":id")
    async getPublicChannelStream(@Res() response, @Param() keyQueryDto: KeyQueryDto) {
        const stream = await this.streamService.getPublicChannelStream(keyQueryDto.id);

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
