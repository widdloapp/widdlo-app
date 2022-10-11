import {Body, Controller, Get, HttpStatus, NotFoundException, Param, Patch, Post, Query, Res} from '@nestjs/common';
import {HttpException} from "@nestjs/common/exceptions/http.exception";
import {CreateCommentDto} from "../dto/create/create-comment.dto";
import {CommentService} from "./comment.service";
import {GetCommentsDto} from "../dto/get/get-comments.dto";
import {QueryDto} from "../dto/create/query.dto";
import {UpdateChannelDto} from "../dto/update/update-channel.dto";
import {UpdateCommentDto} from "../dto/update/update-comment.dto";

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) { }

    @Post()
    async postComment(@Res() response, @Body() createCommentDto: CreateCommentDto) {
        createCommentDto.author = response.locals.user;

        try {
            const comment = await this.commentService.createComment(createCommentDto);

            return response.status(HttpStatus.OK).json({
                message: 'Successfully posted.', comment
            });
        } catch (error) {
            throw new HttpException("Already commented for that target.", HttpStatus.CONFLICT);
        }
    }

    @Get(":target")
    async getComments(@Res() response, @Param() getCommentsDto: GetCommentsDto, @Query() queryDto: QueryDto) {
        const comments = await this.commentService.getComments(getCommentsDto, queryDto);
        return response.status(HttpStatus.OK).json({
            message: 'Comments successfully found.', comments, pages: {current: queryDto.page},
        });
    }
    @Patch()
    async updateComment(@Res() response, @Body() updateCommentDto: UpdateCommentDto) {
        const comment = await this.commentService.updateComment(response.locals.user, updateCommentDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully edited.', comment
        });
    }
}
