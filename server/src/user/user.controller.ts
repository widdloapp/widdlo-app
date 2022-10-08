import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "../dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createVideo(@Res() response, @Body() createUserDto: CreateUserDto) {
        try {
            const newStudent = await this.userService.createUser(createUserDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'User registered successfully', newStudent
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: User could not be created!',
                error: 'Bad Request'
            });
        }
    }
}
