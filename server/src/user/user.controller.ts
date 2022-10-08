import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "../dto/create-user.dto";
import {LoginRequestDto} from "../dto/login-request.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("login")
    async loginAccount(@Res() response, @Body() loginRequestDto: LoginRequestDto) {
        const user = await this.userService.login(loginRequestDto);

        return response.status(HttpStatus.OK).json({
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
