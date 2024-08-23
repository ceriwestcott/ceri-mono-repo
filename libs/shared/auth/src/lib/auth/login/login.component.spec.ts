import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  const createComponent = createComponentFactory({
    component: LoginComponent,
    imports: [ReactiveFormsModule],
  });

  const getButton = () =>
    spectator.query<HTMLButtonElement>('button[type="submit"]');

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

  it('should disable the submit button if data is invalid', () => {
    const button = spectator.query(
      '[data-role="login-button"]'
    ) as HTMLButtonElement;

    spectator.component.loginForm.patchValue({
      email: 'test@.com',
      password: 'password',
    });

    spectator.component.loginForm.markAllAsTouched();
    spectator.detectChanges();

    expect(button.disabled).toBe(true);
  });

  it('should enable the submit button if data is valid', () => {
    const button = getButton();

    spectator.component.loginForm.patchValue({
      email: 'test@gmail.com',
      password: 'password',
    });

    spectator.component.loginForm.markAllAsTouched();
    spectator.detectChanges();

    expect(button?.disabled).toBe(false);
  });
});
