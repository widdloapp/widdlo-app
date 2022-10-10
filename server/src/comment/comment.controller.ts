import {Body, Controller, Get, HttpStatus, Param, Post, Res} from '@nestjs/common';
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {CreateCommentDto} from "../dto/create/create-comment-dto";
import {CommentService} from "./comment.service";
import {GetCommentsDto} from "../dto/create/get-comments.dto";

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
    async getComments(@Res() response, @Param() getCommentsDto: GetCommentsDto) {
        try {
            const comments = await this.commentService.getComments(getCommentsDto);
            return response.status(HttpStatus.OK).json({
                message: 'Comments found successfully', comments, pages: {current: getCommentsDto.page},
            });
        } catch (error) {
            throw new HttpException("Could not get video feed.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
