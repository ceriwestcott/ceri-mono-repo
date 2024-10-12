import { Route } from '@angular/router';
import { SplashComponent } from './splash.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['auth/login']);

export const appRoutes: Route[] = [
  {
    path: '',
    component: SplashComponent,
  },
  {
    path: 'shared',
    loadComponent: () =>
      import('@ceri-web-app/shared-ui').then((m) => m.SharedUiComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('@ceri-web-app/auth').then((m) => m.authRoutes),
  },
  {
    path: 'quiz',
    loadChildren: () =>
      import('@ceri-web-app/quiz-shell').then((m) => m.quizShellRoutes),
  },
  {
    path: 'free-walking-tour',
    loadChildren: () =>
      import('@ceri-web-app/shell').then((m) => m.walkingTourRoutes),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'dynamic-form',
    loadComponent: () =>
      import('@ceri-web-app/shared-ui').then((m) => m.DynamicFormComponent),
  },
  // {
  //   path: 'quiz',
  //   loadChildren: () =>
  //     import('@ceri-web-app/quiz-shell').then((m) => m.quizShellRoutes),
  //   canActivate: [AuthGuardService],
  // },
];
