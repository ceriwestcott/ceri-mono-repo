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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// Nx ignore next line
// eslint-disable-next-line
import { environment } from '../../../../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
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
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
  ],
};
