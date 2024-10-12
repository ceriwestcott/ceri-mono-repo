import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthErrorService {
  getError(error: string | any): string {
    if (error.code === 'auth/user-not-found') {
      return 'User not found';
    } else if (error.code === 'auth/wrong-password') {
      return 'Wrong password';
    } else if (error.code === 'auth/email-already-in-use') {
      return 'Email already in use';
    } else if (error.code === 'auth/weak-password') {
      return 'Password is too weak';
    } else {
      return 'An error occurred';
    }
  }
}
