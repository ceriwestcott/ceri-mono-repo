import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TriviaService } from '@ceri-web-app/quiz-data';
import { Observable } from 'rxjs';
import { Quiz } from '@ceri-web-app/quiz-util';
@Component({
  selector: 'lib-quiz-feature',
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe, JsonPipe],
  templateUrl: './quiz-feature.component.html',
  styleUrl: './quiz-feature.component.css',
})
export class QuizFeatureComponent {
  triviaService = inject(TriviaService);

  quiz?: Observable<Quiz>;

  getQuestions() {
    console.log(this.triviaService);
    this.quiz = this.triviaService.getTriviaQuestions();
  }
}
