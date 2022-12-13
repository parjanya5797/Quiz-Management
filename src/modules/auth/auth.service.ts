import { UserService } from './../user/user.service';
import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {
        
    }

    async validateUserCredentials(email:string,password:string): Promise<User | undefined> {
        const user = await this.userService.getUserByEmail(email);
        if(!user) throw new BadRequestException();

        if(!bcrypt.compare(password,user.password)) 
        throw new UnauthorizedException();

        return user;
    }
}
