import { AuthService } from '@ceri-web-app/shared-util';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { API_URL } from '@ceri-web-app/core';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [RouterModule, NavigationComponent, ButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: API_URL,
      useValue: 'http://localhost:4210',
    },
    AuthService,
  ],
})
export class AppComponent {
  title = 'ceri-web-app';
}
