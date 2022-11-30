import { Question } from './../entities/question.entity';
import { CreateOptionDto } from './../dto/create-option..dto';
import { OptionRepository } from './../repositories/option.repository';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OptionService {
 constructor(@InjectRepository(OptionRepository) private optionRepository: OptionRepository) {}

async createOption(option: CreateOptionDto,question: Question) {
    const newOption = await this.optionRepository.save({
        text: option.text,
        isCorrect: option.isCorrect,
    });

    question.options = [...question.options,newOption];
    await question.save();
    return newOption;
}
}