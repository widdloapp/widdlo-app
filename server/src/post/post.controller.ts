import {
    BadRequestException,
    Body,
    Controller, Delete,
    Get,
    HttpStatus, Param, Patch,
    Post,
    Query,
    Res, Response
} from "@nestjs/common";
import {QueryDto} from "../dto/create/query.dto";
import {PostService} from "./post.service";
import {GetPostDto} from "../dto/get/get-post.dto";
import {PostFeedDto} from "../dto/get/post-feed.dto";
import {UpdatePostDto} from "../dto/update/update-post.dto";
import {CreatePostDto} from "../dto/create/create-post.dto";
import {ChannelContentQueryDto} from "../dto/get/channel-content-query.dto";

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Post()
    async postPost(@Res() response, @Body() createPostDto: CreatePostDto) {
        createPostDto.author = response.locals.channel;

        try {
            const post = await this.postService.createPost(createPostDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Post has been uploaded successfully', post
            });
        } catch (error) {
            throw new BadRequestException("Error: Post could not be created!");
        }
    }

    @Get("channel/:channel")
    async getChannelVideos(@Response() response, @Param() channelContentQueryDto: ChannelContentQueryDto, @Query() queryDto: QueryDto) {
        const comments = await this.postService.getChannelPosts(channelContentQueryDto, queryDto);

        return response.status(HttpStatus.OK).json({
            message: 'Channel posts found successfully.', comments,
        });
    }

    @Get()
    async getPosts(@Response() response, @Query() postFeedDto: PostFeedDto, @Query() queryDto: QueryDto) {
        const posts = await this.postService.getPostsFeed(postFeedDto, queryDto);
        return response.status(HttpStatus.OK).json({
            message: 'Post data found successfully.', posts, pages: {current: queryDto.page},
        });
    }

    @Get(":id")
    async getPost(@Response() response, @Param() getPostDto: GetPostDto) {
        const post = await this.postService.getPost(getPostDto);

        return response.status(HttpStatus.OK).json({
            message: 'Post data found successfully.', post,
        });
    }

    @Patch()
    async updatePost(@Res() response, @Body() updatePostDto: UpdatePostDto) {
        const post = await this.postService.updatePost(response.locals.user, updatePostDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully edited.', post
        });
    }

    @Delete()
    async deletePost(@Res() response, @Body() getPostDto: GetPostDto) {
        const post = await this.postService.deletePost(response.locals.user, getPostDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully deleted.', post
        });
    }
}
