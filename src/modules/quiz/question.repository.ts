import { Question } from './question.entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {


}