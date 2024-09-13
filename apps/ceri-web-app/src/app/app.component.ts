import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { API_URL } from '@ceri-web-app/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NavigationComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: API_URL,
      useValue: 'http://localhost:4210',
    },
  ],
})
export class AppComponent {
  title = 'ceri-web-app';
}
