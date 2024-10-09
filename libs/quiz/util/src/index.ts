import { InjectionToken } from '@angular/core';

export { Quiz, Question } from './lib/model/question';
export const API_URL = new InjectionToken<string>('API_URL');
