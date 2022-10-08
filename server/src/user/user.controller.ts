import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "../dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("login")
    async loginAccount(@Res() response, @Body() body) {
        const user = await this.userService.login(response, body);

        return response.status(HttpStatus.CREATED).json({
            message: 'Logged successfully', user
        });
    }
    @Post("register")
    async registerAccount(@Res() response, @Body() createUserDto: CreateUserDto) {
        const user = await this.userService.createUser(createUserDto);

        return response.status(HttpStatus.CREATED).json({
            message: 'Registered successfully', user
        });
    }
}
