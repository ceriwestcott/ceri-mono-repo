import { Component, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthErrorService, AuthService } from '@ceri-web-app/shared-util';

@Component({
  selector: 'lib-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    JsonPipe,
    AngularFireAuthModule,
  ],
  providers: [AngularFireAuth],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  afService = inject(AngularFireAuth);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  authErrorService = inject(AuthErrorService);
  authService = inject(AuthService);
  error = '';

  async onSubmit() {
    if (!this.registerForm.invalid) {
      const { email, password, firstName, lastName } = this.registerForm.value;
      try {
        if (email && password) {
          const resp = await this.afService.createUserWithEmailAndPassword(
            email,
            password
          );
          if (resp.user) {
            await resp.user.updateProfile({
              displayName: `${firstName} ${lastName}`,
            });
          }

          await this.authService.createUserDocument();

          const uid = resp.user?.uid;
          if (uid) {
            await this.router.navigate(['../profile', uid], {
              relativeTo: this.activatedRoute,
            });
          }
        }
      } catch (error) {
        console.error(error);
        this.error = this.authErrorService.getError(error);
      }
    }
  }
}
