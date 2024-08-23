import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class JWTTokenService {
  jwtToken = '';
  decodedToken: { [key: string]: string } | undefined;

  setToken(token: string) {
    if (token) this.jwtToken = token;
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode.jwtDecode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return this.decodedToken;
  }

  getUser() {
    return this.decodedToken ? this.decodedToken['name'] : null;
  }

  getEmail() {
    return this.decodedToken ? this.decodedToken['email'] : null;
  }

  getExpiryTime() {
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }

  isTokenExpired(): boolean {
    const expiryTime = this.getExpiryTime() ?? null;
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
}
