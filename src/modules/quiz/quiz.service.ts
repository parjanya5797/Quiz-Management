import { createQuizDto } from './dto/CreateQuiz.dto';
import { QuizRepository } from './quiz.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizService {

  constructor(
    @InjectRepository(QuizRepository) private quizRepository : QuizRepository,
    ) {}
  getQuiz() {
    return [1,2,3,"THis is from Service"];
  }

  async createNewQuiz(quiz: createQuizDto) {
    return await this.quizRepository.save(quiz)
  }
}
