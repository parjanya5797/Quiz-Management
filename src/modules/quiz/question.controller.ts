import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Question } from './question.entity';

@Controller('question')
export class QuestionController {
    
    constructor(private questionService: QuestionService) {}
    
    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto):Promise<Question> {
        return await this.questionService.createQuestion(question)
    }
}