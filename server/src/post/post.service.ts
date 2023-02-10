import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {VideoFeedDto} from "../dto/get/video-feed.dto";
import {QueryDto} from "../dto/create/query.dto";
import {ChannelContentQueryDto} from "../dto/get/channel-content-query.dto";
import {Post} from "./post.schema";
import {GetPostDto} from "../dto/get/get-post.dto";
import {UpdatePostDto} from "../dto/update/update-post.dto";
import {CreatePostDto} from "../dto/create/create-post.dto";

@Injectable()
export class PostService {
    constructor(@InjectModel('Post') private postModel: Model<Post>) { }
    async createPost(createPostDto: CreatePostDto): Promise<Post> {
        const post = await new this.postModel(createPostDto);
        return post.save();
    }

    async getPostsFeed(videoFeedDto: VideoFeedDto, queryDto: QueryDto): Promise<Post[]> {
        const query = this.postModel.find({hidden: false, deleted: false}).populate('likes').limit(30).skip(queryDto.page * 30);

        /*switch (queryDto.order) {
            case 'featured': query.sort({date: -1, views: -1, likes: -1});
                break;
            case 'latest': query.sort({date: -1});
                break;
            case 'older': query.sort({views: 1});
                break;
            case 'popular': query.sort({views: -1});
        }*/

        const posts = await query;

        /*if (!videos || videos.length == 0) {
            throw new NotFoundException("No videos found.");
        }*/

        return posts;
    }

    async getChannelPosts(channelContentQueryDto: ChannelContentQueryDto, queryDto: QueryDto): Promise<Post[]> {
        const query = this.postModel.find({channel: channelContentQueryDto.channel}).select(["body"])
            .populate({path: 'author', select: ['avatar', 'username'], populate: {path: 'followers'}}).limit(20).skip(queryDto.page * 20);

        switch (queryDto.order) {
            case 'featured': query.sort({date: -1, views: -1, likes: -1});
                break;
            case 'latest': query.sort({date: -1});
                break;
            case 'older': query.sort({views: 1});
                break;
            case 'popular': query.sort({views: -1});
        }

        const posts = await query;
        return posts;
    }

    async getPost(getVideoDto: GetPostDto): Promise<Post> {
        const video = await this.postModel.findOne({_id: getVideoDto.id, deleted: false}).select(["body"]);
        if (!video) {
            throw new NotFoundException('Unknown video!');
        }

        //await video.update({views: video.views + 1})

        return video;
    }

    async updatePost(user: string, updatePostDto: UpdatePostDto) {
        const message = await this.postModel.findOneAndUpdate({_id: updatePostDto.id, author: user}, updatePostDto, {new: true});

        if (!message) {
            throw new NotFoundException("Unknown post or invalid authentication.");
        }

        return message;
    }
    async deletePost(user: string, getVideoDto: GetPostDto) {
        const video = await this.postModel.findOneAndUpdate({_id: getVideoDto.id, author: user, deleted: false}, {deleted: true});

        if (!video) {
            throw new NotFoundException('Unknown post or invalid authentication.');
        }
    }
}
