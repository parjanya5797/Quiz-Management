import { IsNotEmpty, Length } from "class-validator";

export class createQuizDto {

@IsNotEmpty({message: "The Quiz Should have a title"})
@Length(3,255)
 title: string;

 @IsNotEmpty({message: 'The Descripiton field is required'})
 @Length(3)
 description: string;

}
