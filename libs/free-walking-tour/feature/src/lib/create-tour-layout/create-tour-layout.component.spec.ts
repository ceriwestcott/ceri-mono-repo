import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTourLayoutComponent } from './create-tour-layout.component';

describe('FeatureComponent', () => {
  let component: CreateTourLayoutComponent;
  let fixture: ComponentFixture<CreateTourLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTourLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTourLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
