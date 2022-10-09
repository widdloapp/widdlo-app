import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {ViewService} from "./view.service";
import {RegisterViewDto} from "../dto/register-view.dto";

@Controller('view')
export class ViewController {
    constructor(private readonly viewService: ViewService) { }

    @Post()
    async likeVideo(@Res() response, @Body() registerViewDto: RegisterViewDto) {
        registerViewDto.user = response.locals.user;

        await this.viewService.registerView(registerViewDto);

        return response.status(HttpStatus.OK).json({
            message: 'Successfully registered.'
        });
    }
}
