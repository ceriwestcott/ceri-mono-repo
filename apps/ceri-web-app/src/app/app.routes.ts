import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'shared',
    loadComponent: () =>
      import('@ceri-web-app/shared-ui').then((m) => m.SharedUiComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('@ceri-web-app/auth').then((m) => m.authRoutes),
  },
];
