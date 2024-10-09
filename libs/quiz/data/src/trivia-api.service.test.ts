import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class TriviaSerivce {
  http = Inject(HttpClient);
  api = Inject('API_URL');

  getTriviaQuestions(params: Record<string, string[]>) {
    if (!params) return this.http.get(`${this.api}`);

    const mappedParams = this.mapParams(params);
    return this.http.get(`${this.api}?`, mappedParams);
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
