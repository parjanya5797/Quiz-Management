import { Quiz } from '../entities/quiz.entity';
import { QuestionRepository } from '../repositories/question.repository';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';

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

    async findQuestionById(id:number): Promise<Question> {
        return await this.questionRepository.findOne(id,{relations:['quiz','options']})
    }
}