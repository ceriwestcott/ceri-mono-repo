import { Route } from '@angular/router';
import { TourTableComponent } from '@ceri-web-app/walking-tour-ui';
import { CreateTourLayoutComponent } from '@ceri-web-app/feature';

export const walkingTourRoutes: Route[] = [
  {
    path: '',
    component: CreateTourLayoutComponent,
  },
  {
    path: 'tour-table',
    component: TourTableComponent,
  },
];
