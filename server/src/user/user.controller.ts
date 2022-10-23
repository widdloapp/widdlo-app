import {UserService} from "./user.service";
import {CreateUserDto} from "../dto/create/create-user.dto";
import {LoginRequestDto} from "../dto/create/login-request.dto";
import {UserInfoDto} from "../dto/get/user-info.dto";
import {
    Body,
    Controller,
    ForbiddenException,
    Get,
    HttpStatus,
    NotFoundException,
    Param,
    Post,
    Res
} from "@nestjs/common";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("login")
    async loginAccount(@Res() response, @Body() loginRequestDto: LoginRequestDto) {
        const token = await this.userService.login(loginRequestDto);

        return response.status(HttpStatus.OK).json({
            message: 'Logged successfully.', token
        });
    }

    @Post("register")
    async registerAccount(@Res() response, @Body() createUserDto: CreateUserDto) {
        const user = await this.userService.createUser(createUserDto);
        const token = await this.userService.createToken(user._id.toString());

        throw new ForbiddenException("Account must be verified to be used.");

        return response.status(HttpStatus.CREATED).json({
            message: 'Registered successfully.', token
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
