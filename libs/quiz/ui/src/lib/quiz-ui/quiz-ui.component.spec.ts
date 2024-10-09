import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizUiComponent } from './quiz-ui.component';

describe('QuizUiComponent', () => {
  let component: QuizUiComponent;
  let fixture: ComponentFixture<QuizUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
