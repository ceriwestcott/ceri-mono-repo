import { Inject, Injectable } from '@angular/core';
import { Login } from '@ceri-web-app/models';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@ceri-web-app/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private tokenSubject?: BehaviorSubject<string>;
  public token$?: Observable<string>;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(API_URL) private apiUrl: string
  ) {}
  login(user: Login): Observable<any> {
    this.http.post(`${this.apiUrl}/login`, user).subscribe((response: any) => {
      console.log(response);
    });

    this.http.post(`${this.apiUrl}/login`, user).pipe(
      map((token: any) => {
        console.log(token);
        localStorage.setItem('token', token);
        this.tokenSubject?.next(token);
        return token;
      })
    );



    return of('token');
  }
}
