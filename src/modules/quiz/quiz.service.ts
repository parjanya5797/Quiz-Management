import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {

  getQuiz() {
    return [1,2,3,"THis is from Service"];
  }
}
