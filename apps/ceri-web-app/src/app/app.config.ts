import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { TriviaService } from '@ceri-web-app/quiz-data';
import { API_URL } from '@ceri-web-app/quiz-util';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    {
      provide: API_URL,
      useValue: 'https://the-trivia-api.com/v2/questions',
    },
    TriviaService,
    HttpClient,
  ],
};
