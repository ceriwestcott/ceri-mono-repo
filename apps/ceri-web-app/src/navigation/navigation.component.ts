import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '@ceri-web-app/shared-util';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, JsonPipe],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  authService = inject(AuthService);

  isLoggedIn$ = this.authService.isAuthenticated();

  currentUser$ = this.authService.currentUser$;

  logOut() {
    console.log('Logging out');
    this.authService.logout();
  }

  clear() {
    console.log('Clearing');
    localStorage.clear();
    this.authService.logout();
  }
}
