import { Quiz } from '../entities/quiz.entity';
import { createQuizDto } from '../dto/CreateQuiz.dto';
import { Controller, Get ,Post,Body, HttpCode, UsePipes, ValidationPipe,Param,ParseIntPipe} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) {}


  @Get('/')
  getAllQuiz() {
    return this.quizService.getQuiz();
  }

  @Get('/:id')
  async getQuizById(@Param('id',ParseIntPipe) id : number): Promise<Quiz>{
    return await this.quizService.getQuizById(id);
  }  

  @Post('/create')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: createQuizDto) {
      return await this.quizService.createNewQuiz(quizData);

  }

}
