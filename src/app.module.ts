import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { typeOrmConfigAsync } from './config/typeorm.config';

@Module({
  imports: [QuizModule,TypeOrmModule.forRootAsync(typeOrmConfigAsync),ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
