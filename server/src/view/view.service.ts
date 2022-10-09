import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {View} from "./view.schema";
import {RegisterViewDto} from "../dto/register-view.dto";

@Injectable()
export class ViewService {
    constructor(@InjectModel('Like') private viewModel: Model<View>) { }

    async registerView(registerViewDto: RegisterViewDto): Promise<View> {
        const view = await new this.viewModel(registerViewDto);
        return view.save();
    }
}
