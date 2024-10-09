import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('DynamicFormComponent', () => {
  let spectator: Spectator<DynamicFormComponent>;
  const createComponent = createComponentFactory({
    component: DynamicFormComponent,
    imports: [ReactiveFormsModule],
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('#getErrorMessage', () => {
    it('should return empty string if formControl is not found', () => {
      expect(spectator.component.getErrorMessage('name')).toEqual('');
    });
    it('should return error message if formControl has error', () => {
      spectator = createComponent({
        props: {
          formStructure: [{
            type: 'text',
            label: 'Name',
            name: 'name',
            value: '',
            validators: [{ name: 'required', message: 'Name is required', validator: 'required' }]
          }]
        }
      });



      const nameControl = spectator.component.dynamicForm.get('name');
      expect(nameControl).toBeTruthy(); // Ensure the control exists

      nameControl?.setValue('');
      nameControl?.markAsTouched(); // Mark as touched to trigger validation

      spectator.component.onSubmit();

      const retVal = spectator.component.getErrorMessage('name');
      expect(retVal).toEqual('Name is required');
    });

    it('should return empty string if formControl has no error', () => {
      spectator = createComponent({
        props:{
          formStructure: [{
            type: 'text',
            label: 'Name',
            name: 'name',
            value: '',
            validators: [{ name: 'required', message: 'Name is required', validator: 'required' }]
          }]
        }
      });

      const nameControl = spectator.component.dynamicForm.get('name');
      nameControl?.patchValue('John Doe');
      nameControl?.markAsTouched();

      spectator.component.onSubmit();

      expect(spectator.component.getErrorMessage('name')).toEqual('');
    });
  });
})
