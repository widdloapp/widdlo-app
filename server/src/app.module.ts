import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from "./app/app.controller";

import {AppService} from "./app/app.service";
import {VideoSchema} from "./video/video.schema";
import {VideoService} from './video/video.service';
import {VideoController} from './video/video.controller';
import {AuthMiddleware} from "./user/auth.middleware";
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

require('dotenv').config()

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI),
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
            { name: 'PlaylistVideo', schema: PlaylistVideoSchema }
        ])],
  controllers: [AppController, VideoController, UserController, LikeController, ChannelController, CommentController, StreamController, ChatController,
  MessageController, FollowController, PlaylistController],
  providers: [AppService, VideoService, UserService, LikeService, ChannelService, CommentService, StreamService, ChatService,
  MessageService, FollowService, PlaylistService]
})
export class AppModule implements NestModule {
  configure(middlewareConsumer: MiddlewareConsumer) {
    middlewareConsumer.apply(AuthMiddleware).forRoutes(
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
        { path: 'follow', method: RequestMethod.POST },
        { path: 'follow', method: RequestMethod.DELETE },
        { path: 'video', method: RequestMethod.POST },
        { path: 'video', method: RequestMethod.DELETE },
        { path: 'playlist', method: RequestMethod.GET },
        { path: 'playlist', method: RequestMethod.POST },
        { path: 'playlist', method: RequestMethod.DELETE },
        { path: 'playlist/video', method: RequestMethod.POST },
        { path: 'playlist/video', method: RequestMethod.DELETE }
    );
  }
}
