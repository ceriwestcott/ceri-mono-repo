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

  it('should call onSubmit when form is submitted', () => {
    const spy = jest.spyOn(spectator.component, 'onSubmit');

    spectator.component.loginForm.setValue({
      email: 'test@gmail.com',
      password: 'password',
    });

    const button = spectator.query(
      'button[type="submit"]'
    ) as HTMLButtonElement;

    button.click();

    console.log(button.textContent);
    expect(spectator.component.onSubmitClicked).toBe(true);
  });
});
