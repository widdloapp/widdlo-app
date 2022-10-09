import {Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "../dto/create-user.dto";
import {LoginRequestDto} from "../dto/login-request.dto";
import {UserInfoDto} from "../dto/user-info.dto";

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
        await this.userService.createUser(createUserDto);

        const token = await this.userService.login(createUserDto);

        return response.status(HttpStatus.CREATED).json({
            message: 'Registered successfully', token
        });
    }

    @Get(":id")
    async getPublicUser(@Res() response, @Param() userInfoDto: UserInfoDto) {
        const user = await this.userService.getPublicData(userInfoDto);

        if (!user) {
            throw new NotFoundException('Channel could not found!');
        }

        return response.status(HttpStatus.OK).json({
            message: 'User data retrieved successfully.', user
        });
    }
    @Get()
    async getUser(@Res() response) {
        const user = await this.userService.getData(response.locals.user);

        if (!user) {
            throw new NotFoundException('User could not found!');
        }

        return response.status(HttpStatus.OK).json({
            message: 'User data retrieved successfully.', user
        });
    }
}
