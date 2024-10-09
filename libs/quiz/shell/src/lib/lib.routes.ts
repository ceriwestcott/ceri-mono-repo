import { Route } from '@angular/router';
import {
  QuizFeatureComponent,
  QuizSetupComponent,
} from '@ceri-web-app/quiz-feature';
import { QuizUiComponent } from '@ceri-web-app/quiz-ui';

export const quizShellRoutes: Route[] = [
  { path: '', component: QuizFeatureComponent },
  { path: 'setup', component: QuizSetupComponent },
];
