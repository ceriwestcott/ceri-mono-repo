import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL, Quiz } from '@ceri-web-app/quiz-util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  http = inject(HttpClient);
  api = inject(API_URL);

  getTriviaQuestions(params?: Record<string, string[]>): Observable<Quiz> {
    console.log(this.api);
    return this.http.get<Quiz>(`${this.api}`);
  }
  mapParams(params: Record<string, string[]>): string {
    const queryString = Object.keys(params)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(
            params[key].join(',')
          )}`
      )
      .join('&');
    return queryString;
  }
}
