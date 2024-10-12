import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs';
import { AuthService } from '@ceri-web-app/shared-util';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, JsonPipe],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  afService = inject(AngularFireAuth);
  authService = inject(AuthService);
  router = inject(Router);
  isLoggedIn$ = this.authService.isLoggedIn$;
  displayName$ = this.afService.authState.pipe(
    map((user) => user?.displayName)
  );
  userId$ = this.afService.authState.pipe(map((user) => user?.uid));

  logout() {
    this.afService.signOut();
    this.router.navigate(['']);
  }
}
