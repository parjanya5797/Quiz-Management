import { Quiz } from './quiz.entity';
import { QuestionRepository } from './question.repository';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {

    constructor(@InjectRepository(QuestionRepository) private questionRepository: QuestionRepository) {}


    async createQuestion(question: CreateQuestionDto,quiz:Quiz): Promise<Question>{
        // return await this.questionRepository.save(question);
        const newQuestion =  await this.questionRepository.save({
            question:question.question
        });
        quiz.questions = [...quiz.questions, newQuestion];
        await quiz.save();

        return newQuestion;
    }
}