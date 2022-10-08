import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from "./app/app.controller";
import {AppService} from "./app/app.service";
import {VideoSchema} from "./video/video.schema";
import {VideoService} from './video/video.service';
import {VideoController} from './video/video.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:s63deoM3V4jObECN@dev.gdbizyp.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'Video', schema: VideoSchema }])],
  controllers: [AppController, VideoController],
  providers: [AppService, VideoService],
})
export class AppModule {}
