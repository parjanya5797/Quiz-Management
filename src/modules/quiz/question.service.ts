import { QuestionRepository } from './question.repository';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {

    constructor(@InjectRepository(QuestionRepository) private questionRepository: QuestionRepository) {}


    async createQuestion(question: CreateQuestionDto): Promise<Question>{
        return await this.questionRepository.save(question);
    }
}