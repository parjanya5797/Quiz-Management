import { MESSAGES } from './../../../app.utils';
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { REGEX } from "src/app.utils";

export class UserRegisterRequestDto {
    
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @Length(8,24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE,
    })
    password: string;
    
    @IsNotEmpty()
    @Length(8,24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE,
    })    
    confirm: string;
}