import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '@ceri-web-app/quiz-util';


@Component({
  selector: 'lib-quiz-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-ui.component.html',
  styleUrl: './quiz-ui.component.css',
})
export class QuizUiComponent {
  _question!: Question;
  questionList!: string[];
  @Input() set question(question: Question)  {
    this._question = question;
    this.questionList = [question.correctAnswer, ...question.incorrectAnswers];
  }
}
