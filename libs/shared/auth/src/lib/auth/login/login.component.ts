import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Login } from '@ceri-web-app/models';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthErrorService } from '@ceri-web-app/shared-util';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AngularFireAuth);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  authErrorService = inject(AuthErrorService);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  error = '';

  onSubmitClicked = false;

  async onSubmit() {
    if (!this.loginForm.invalid) {
      const loginData: Login = {
        email: this.loginForm.value.email ?? '',
        password: this.loginForm.value.password ?? '',
      };
      try {
        const response = await this.authService.signInWithEmailAndPassword(
          loginData.email,
          loginData.password
        );

        const uid = response.user?.uid;
        await this.router.navigate(['../profile', uid], {
          relativeTo: this.activatedRoute,
        });
      } catch (error: string | any) {
        this.error = this.authErrorService.getError(error);
      }
    }
  }
}
