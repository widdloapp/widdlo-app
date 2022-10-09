import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {View} from "./view.schema";

@Injectable()
export class ViewService {
    constructor(@InjectModel('Like') private viewModel: Model<View>) { }

    async registerView(id: string): Promise<View> {
        const view = await new this.viewModel(id);
        return view.save();
    }
}
