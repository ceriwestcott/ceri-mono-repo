import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizDataComponent } from './quiz-data.component';

describe('QuizDataComponent', () => {
  let component: QuizDataComponent;
  let fixture: ComponentFixture<QuizDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
