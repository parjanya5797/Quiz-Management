import { SETTINGS } from './../../app.utils';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserService } from './user.service';
import { Body, Controller, HttpStatus, Post, UsePipes, ValidationPipe } from "@nestjs/common";

@Controller('user')
export class UserController {
    constructor(private userService:UserService) {}

    @Post('/register')
    @UsePipes(SETTINGS.VALIDATION_PIPE)
    doUserRegistration(@Body() userRegister: UserRegisterRequestDto) {
        return this.userService.doUserRegistration(userRegister);
    }

}