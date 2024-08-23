import { Route } from '@angular/router';
import {
  QuizFeatureComponent,
  QuizSetupComponent,
} from '@ceri-web-app/quiz-feature';

export const quizShellRoutes: Route[] = [
  { path: '', component: QuizFeatureComponent },
  { path: 'setup', component: QuizSetupComponent },
];
