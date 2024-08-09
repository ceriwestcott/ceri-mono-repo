import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthType } from '@ceri-web-app/models';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'lib-auth-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  _authType: 'login' | 'register' = 'login';
  form: any;
  fb: any;

  @Input({ required: true }) set authType(type: 'login' | 'register') {
    this._authType = type;
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    if (this._authType === AuthType.Register) {
      this.form.addControl(
        'confirmPassword',
        new FormControl('', [Validators.required])
      );
    }
  }
}
