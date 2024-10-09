import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TriviaService } from '@ceri-web-app/quiz-data';
import { Observable } from 'rxjs';
import { Question, Quiz } from '@ceri-web-app/quiz-util';
import { QuizUiComponent } from '@ceri-web-app/quiz-ui';

@Component({
  selector: 'lib-quiz-feature',
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe, JsonPipe, QuizUiComponent],
  templateUrl: './quiz-feature.component.html',
  styleUrl: './quiz-feature.component.css',
})
export class QuizFeatureComponent {
  question: Question = {
    id: '0001',
    category: 'geography',
    question: {
      text: 'What is the capital of wales?'
    },
    correctAnswer: 'cardiff',
    incorrectAnswers: [
      'Bristol',
      'London',
      'Belfast'
    ]
  }
}
