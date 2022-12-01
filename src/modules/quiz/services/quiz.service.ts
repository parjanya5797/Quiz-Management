import { Quiz } from '../entities/quiz.entity';
import { createQuizDto } from '../dto/CreateQuiz.dto';
import { QuizRepository } from '../repositories/quiz.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuizService {

  constructor(
    @InjectRepository(QuizRepository) private quizRepository : QuizRepository,
    ) {}
  async getQuiz() :Promise<[Quiz[],number]> {
    return await this.quizRepository.createQueryBuilder('q')
    .leftJoinAndSelect('q.questions','qt')
    .leftJoinAndSelect('qt.options','opt')
    .getManyAndCount();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne(id,{relations: ['questions','questions.options']});
  }

  async createNewQuiz(quiz: createQuizDto) {
    return await this.quizRepository.save(quiz)
  }
}
