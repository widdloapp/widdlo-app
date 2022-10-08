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

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:s63deoM3V4jObECN@dev.gdbizyp.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'Video', schema: VideoSchema }, { name: 'User', schema: UserSchema }])],
  controllers: [AppController, VideoController, UserController],
  providers: [AppService, VideoService, UserService]
})
export class AppModule implements NestModule {
  configure(middlewareConsumer: MiddlewareConsumer) {
    middlewareConsumer.apply(AuthMiddleware).forRoutes({ path: 'videos', method: RequestMethod.POST });
  }
}
