import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { JwtInterceptor } from '@ceri-web-app/shared-util';
import { API_URL } from '@ceri-web-app/core';
import { TriviaService } from '@ceri-web-app/quiz-data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),

    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    TriviaService,
    {
      provide: API_URL,
      useValue: 'http://localhost:4210',
    },
  ],
};
