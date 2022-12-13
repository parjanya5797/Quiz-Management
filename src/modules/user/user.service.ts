import { User } from './user.entity';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    async doUserRegistration(userRegister:UserRegisterRequestDto): Promise<User> {
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(userRegister.password,salt);
        const user =new User();
        user.name = userRegister.name;
        user.email = userRegister.email;
        user.password = password;
       return await user.save();
    }

    async getUserByEmail(email:string) {
        return User.findOne({where:{email}});
    }
}