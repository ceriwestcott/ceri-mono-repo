import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserProfile } from '@ceri-web-app/models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  afAuth = inject(AngularFireAuth);
  afsService = inject(AngularFirestore);

  isLoggedIn$ = this.afAuth.authState.pipe(map((user) => !!user));

  async createUserDocument() {
    const user = await this.afAuth.currentUser;

    const userProfile: UserProfile = {
      email: user?.email ?? '',
      uid: user?.uid ?? '',
      name: user?.displayName ?? '',
      phone: '',
      address: '',
    };

    return this.afsService.doc(`users/${user?.uid}`).set(userProfile);
    //navigate to the profile page
  }
}
