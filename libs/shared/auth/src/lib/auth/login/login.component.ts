import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Login } from '@ceri-web-app/models';
import { AuthService } from '@ceri-web-app/shared-util';
@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmitClicked = false;

  onSubmit() {
    if (!this.loginForm.invalid) {
      const loginData: Login = {
        email: this.loginForm.value.email ?? '',
        password: this.loginForm.value.password ?? '',
      };

      this.authService.login(loginData);
    }
  }
}
