import {Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Query, Res} from '@nestjs/common';
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {CreateCommentDto} from "../dto/create/create-comment.dto";
import {CommentService} from "./comment.service";
import {GetCommentsDto} from "../dto/get/get-comments.dto";
import {QueryDto} from "../dto/create/query.dto";

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) { }

    @Post()
    async postComment(@Res() response, @Body() createCommentDto: CreateCommentDto) {
        createCommentDto.author = response.locals.user;

        try {
            await this.commentService.createComment(createCommentDto);
        } catch (error) {
            throw new HttpException("Already commented for that target.", HttpStatus.CONFLICT);
        }

        return response.status(HttpStatus.OK).json({
            message: 'Successfully posted.'
        });
    }

    @Get(":target")
    async getComments(@Res() response, @Param() getCommentsDto: GetCommentsDto, @Query() queryDto: QueryDto) {
        const comments = await this.commentService.getComments(getCommentsDto, queryDto);
        return response.status(HttpStatus.OK).json({
            message: 'Comments successfully found.', comments, pages: {current: queryDto.page},
        });
    }
}
