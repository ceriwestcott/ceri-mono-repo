import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizShellComponent } from './quiz-shell.component';

describe('QuizShellComponent', () => {
  let component: QuizShellComponent;
  let fixture: ComponentFixture<QuizShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
