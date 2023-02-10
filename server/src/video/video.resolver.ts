import {Args, Query, Resolver} from "@nestjs/graphql";
import {Video} from "./video.schema";
import {VideoService} from "./video.service";
import {VideoFeedDto} from "../dto/get/video-feed.dto";
import {QueryDto} from "../dto/create/query.dto";

@Resolver('Video')
export class VideoResolver {
    constructor(private readonly videoService: VideoService) {}

    @Query(() => [Video])
    async getVideoFeed(@Args('feed') videoFeedDto: VideoFeedDto, @Args('query') queryDto: QueryDto) {
        return await this.videoService.getVideoFeed(videoFeedDto, queryDto);
    }
}