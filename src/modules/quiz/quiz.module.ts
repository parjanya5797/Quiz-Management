import { QuestionRepository } from './question.repository';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { QuizRepository } from './quiz.repository';

@Module({
  controllers: [QuizController,QuestionController],
  imports: [TypeOrmModule.forFeature([QuizRepository,QuestionRepository])],
  providers: [QuizService,QuestionService]
})
export class QuizModule {}
