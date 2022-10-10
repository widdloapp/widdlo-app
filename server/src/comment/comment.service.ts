import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateCommentDto} from "../dto/create/create-comment-dto";
import {Comment} from "./comment.schema";
import {GetCommentsDto} from "../dto/create/get-comments.dto";

@Injectable()
export class CommentService {
    constructor(@InjectModel('Comment') private commentModel: Model<Comment>) { }

    async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
        const comment = await new this.commentModel(createCommentDto);
        return comment.save();
    }

    async getComments(getCommentsDto: GetCommentsDto): Promise<Comment[]> {
        const comments = await this.commentModel.find({target: getCommentsDto.target}).populate("author", ["name"]).limit(20).skip(getCommentsDto.page * 20);
        return comments;
    }
}
