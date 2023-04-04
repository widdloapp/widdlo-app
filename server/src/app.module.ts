import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from "./app/app.controller";

import {AppService} from "./app/app.service";
import {VideoSchema} from "./video/video.schema";
import {VideoService} from './video/video.service';
import {VideoController} from './video/video.controller';
import {AuthMiddleware} from "./middleware/auth.middleware";
import {UserController} from "./user/user.controller";
import {UserService} from "./user/user.service";
import {UserSchema} from "./user/user.schema";
import {LikeService} from "./like/like.service";
import {LikeSchema} from "./like/like.schema";
import {LikeController} from "./like/like.controller";
import {ChannelService} from "./channel/channel.service";
import {ChannelController} from "./channel/channel.controller";
import {ChannelSchema} from "./channel/channel.schema";
import {CommentSchema} from "./comment/comment.schema";
import {CommentController} from "./comment/comment.controller";
import {CommentService} from "./comment/comment.service";
import {StreamService} from "./stream/stream.service";
import {StreamController} from "./stream/stream.controller";
import {StreamSchema} from "./stream/stream.schema";
import {ChatSchema} from "./chat/chat.schema";
import {ChatService} from "./chat/chat.service";
import {ChatController} from "./chat/chat.controller";
import {MessageSchema} from "./message/message.schema";
import {MessageController} from "./message/message.controller";
import {MessageService} from "./message/message.service";
import {FollowSchema} from "./follow/follow.schema";
import {FollowController} from "./follow/follow.controller";
import {FollowService} from "./follow/follow.service";
import {PlaylistService} from "./playlist/playlist.service";
import {PlaylistController} from "./playlist/playlist.controller";
import {PlaylistVideo, PlaylistVideoSchema} from "./playlist/video-playlist.schema";
import {PlaylistSchema} from "./playlist/playlist.schema";
import {BadgeSchema} from "./badge/badge.schema";
import {ChannelBadgeSchema} from "./badge/channel-badge.schema";
import {FileUploadService} from "./file/file-upload.service";
import {FileUploadController} from "./file/file-upload.controller";
import {FileUploadModule} from "./file/file-upload.module";
import {SubscriptionSchema} from "./subscription/subscription.schema";
import {PostSchema} from "./post/post.schema";
import {PostService} from "./post/post.service";
import {PostController} from "./post/post.controller";
import {CaptchaMiddleware} from "./middleware/captcha.middleware";
import {GraphQLModule} from "@nestjs/graphql";
import {VideoResolver} from "./video/video.resolver";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";

require('dotenv').config()

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: process.cwd() + 'src/schema.gql',
      debug: false,
      playground: false,
  }),
      MongooseModule.forRoot(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      }),
      FileUploadModule,
    MongooseModule.forFeature(
        [
            { name: 'Video', schema: VideoSchema },
            { name: 'User', schema: UserSchema },
            { name: 'Like', schema: LikeSchema },
            { name: 'Channel', schema: ChannelSchema },
            { name: 'Comment', schema: CommentSchema },
            { name: 'Stream', schema: StreamSchema },
            { name: 'Chat', schema: ChatSchema },
            { name: 'Message', schema: MessageSchema },
            { name: 'Follow', schema: FollowSchema },
            { name: 'Playlist', schema: PlaylistSchema },
            { name: 'PlaylistVideo', schema: PlaylistVideoSchema },
            { name: 'Badge', schema: BadgeSchema },
            { name: 'ChannelBadge', schema: ChannelBadgeSchema },
            { name: 'Subscription', schema: SubscriptionSchema },
            { name: 'Post', schema: PostSchema }
        ]),
  ],
  controllers: [AppController, VideoController, UserController, LikeController, ChannelController, CommentController, StreamController, ChatController,
  MessageController, FollowController, PlaylistController, FileUploadController, PostController],
  providers: [AppService, VideoService, UserService, LikeService, ChannelService, CommentService, StreamService, ChatService,
  MessageService, FollowService, PlaylistService, FileUploadService, PostService, VideoResolver]
})

export class AppModule implements NestModule {
  configure(middlewareConsumer: MiddlewareConsumer) {
    middlewareConsumer.apply(AuthMiddleware).forRoutes(
        { path: 'like/:target', method: RequestMethod.GET },
        { path: 'like', method: RequestMethod.POST },
        { path: 'like', method: RequestMethod.DELETE },
        { path: 'channel', method: RequestMethod.POST },
        { path: 'channel', method: RequestMethod.PATCH },
        { path: 'user', method: RequestMethod.GET },
        { path: 'comment', method: RequestMethod.POST },
        { path: 'comment', method: RequestMethod.PATCH },
        { path: 'stream', method: RequestMethod.GET },
        { path: 'chat', method: RequestMethod.POST },
        { path: 'message', method: RequestMethod.POST },
        { path: 'message', method: RequestMethod.PATCH },
        { path: 'message', method: RequestMethod.DELETE },
        { path: 'follow', method: RequestMethod.GET },
        { path: 'follow/check', method: RequestMethod.GET },
        { path: 'follow', method: RequestMethod.POST },
        { path: 'follow', method: RequestMethod.DELETE },
        { path: 'video', method: RequestMethod.POST },
        { path: 'video', method: RequestMethod.DELETE },
        { path: 'playlist', method: RequestMethod.GET },
        { path: 'playlist', method: RequestMethod.POST },
        { path: 'playlist', method: RequestMethod.DELETE },
        { path: 'playlist/video', method: RequestMethod.POST },
        { path: 'playlist/video', method: RequestMethod.DELETE },
        { path: 'post', method: RequestMethod.POST }
    ).apply(CaptchaMiddleware).forRoutes(
        //{ path: 'user/login', method: RequestMethod.POST },
        )};
}
