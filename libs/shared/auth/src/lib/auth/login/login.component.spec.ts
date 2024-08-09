import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  const createComponent = createComponentFactory({
    component: LoginComponent,
    imports: [ReactiveFormsModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have a form', () => {
    expect(spectator.component.loginForm).toBeTruthy();
  });

  it('should have a email control', () => {
    expect(spectator.component.loginForm.get('email')).toBeTruthy();
  });

  it('should have a password control', () => {
    expect(spectator.component.loginForm.get('password')).toBeTruthy();
  });

  it('should have a submit button', () => {
    expect(spectator.query('button[type="submit"]')).toBeTruthy();
  });
});
