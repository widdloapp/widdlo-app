import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateCommentDto} from "../dto/create-comment-dto";
import {Comment} from "./comment.schema";

@Injectable()
export class CommentService {
    constructor(@InjectModel('Comment') private commentModel: Model<Comment>) { }

    async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
        const comment = await new this.commentModel(createCommentDto);
        return comment.save();
    }
}
