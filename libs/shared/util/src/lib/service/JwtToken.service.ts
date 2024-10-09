import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@ceri-web-app/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
} from 'rxjs';
import { Login } from '@ceri-web-app/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  apiUrl = inject(API_URL);

  private loginSubject = new BehaviorSubject<Login | null>(null);
  private login$ = this.loginSubject.asObservable();

  public isLoggedIn$ = this.login$.pipe(
    switchMap((credentials) => {
      if (!credentials) return of(false);
      return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
        map((response) => {
          console.log('Logged in', response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
          return true;
        }),
        catchError((error) => {
          console.error('Error logging in', error);
          return of(false);
        })
      );
    }),
    shareReplay(1)
  );

  public currentUser$ = this.isLoggedIn$.pipe(
    switchMap((loggedIn) => {
      if (!loggedIn) return of(null);
      const userUuid = localStorage.getItem('token');
      if (!userUuid) return of(null);
      return this.http.get<any>(`${this.apiUrl}/getUserById`, {
        params: {
          userId: userUuid,
        },
      });
    }),
    shareReplay(1)
  );

  login(user: Login): void {
    this.loginSubject.next(user);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loginSubject.next(null);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedIn$;
  }
}
