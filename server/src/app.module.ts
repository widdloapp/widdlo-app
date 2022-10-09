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

require('dotenv').config()

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature(
        [
            { name: 'Video', schema: VideoSchema },
          { name: 'User', schema: UserSchema },
          { name: 'Like', schema: LikeSchema },
            { name: 'Channel', schema: ChannelSchema }
        ])],
  controllers: [AppController, VideoController, UserController, LikeController, ChannelController],
  providers: [AppService, VideoService, UserService, LikeService, ChannelService]
})
export class AppModule implements NestModule {
  configure(middlewareConsumer: MiddlewareConsumer) {
    middlewareConsumer.apply(AuthMiddleware).forRoutes(
        { path: 'video', method: RequestMethod.POST },
        { path: 'like', method: RequestMethod.POST }
    );
  }
}
