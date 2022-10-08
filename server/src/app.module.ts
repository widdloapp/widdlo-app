import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {VideoSchema} from "./schema/video.schema";
import { VideoService } from './video/video.service';
import { VideoController } from './video/video.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/widdlo'),
    MongooseModule.forFeature([{ name: 'Video', schema: VideoSchema }])],
  controllers: [AppController, VideoController],
  providers: [AppService, VideoService],
})
export class AppModule {}
