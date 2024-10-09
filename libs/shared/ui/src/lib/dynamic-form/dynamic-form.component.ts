import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormStructure } from '@ceri-web-app/models';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'lib-dynamic-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent implements OnInit {
  @Input({
    required: true,
  })
  formStructure: IFormStructure[] = [];

  @Output() formSubmit = new EventEmitter<any>();
  dynamicForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({});
  }

  getErrorMessage(controlName: string): string {
    const formControl = this.dynamicForm.get(controlName);
    if (!formControl) {
      return '';
    }

    if (formControl.errors) {
      const control = this.formStructure.find(c => c.name === controlName);
      if (control && Array.isArray(control.validators)) {
        for (const validation of control.validators) {
          if (formControl.hasError(validation.name)) {
            return validation.message;
          }
        }
      }
    }

    return '';
  }

  onSubmit() {
    if (!this.dynamicForm.valid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }
    this.formSubmit.emit(this.dynamicForm.value);
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    const formGroup: Record<string, any> = {};
    this.formStructure.forEach((control) => {
      const controlValidators: Validators[] = [];
      if (control.validators) {
        control.validators.forEach(
          (validation: {
            name: string;
            validator: string;
            message: string;
          }) => {
            if (validation.validator === 'required')
              controlValidators.push(Validators.required);
            if (validation.validator === 'email')
              controlValidators.push(Validators.email);
          }
        );
      }

      formGroup[control.name] = [control.value || '', controlValidators];
    });

    this.dynamicForm = this.fb.group(formGroup);
  }
}
