import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizFeatureComponent } from './quiz-feature.component';

describe('QuizFeatureComponent', () => {
  let component: QuizFeatureComponent;
  let fixture: ComponentFixture<QuizFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
