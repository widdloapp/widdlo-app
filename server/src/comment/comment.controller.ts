import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {CreateCommentDto} from "../dto/create-comment-dto";
import {CommentService} from "./comment.service";

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
}
