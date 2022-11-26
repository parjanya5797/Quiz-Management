import { createQuizDto } from './dto/CreateQuiz.dto';
import { Controller, Get ,Post,Body, HttpCode, UsePipes, ValidationPipe} from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) {}


  @Get('/')
  getAllQuiz() {
    return this.quizService.getQuiz();
  }

  @Post('/create')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: createQuizDto) {
    // try {
      return await this.quizService.createNewQuiz(quizData);
    // } catch (error) {
    //   return error;
      
    // }
  }

}
