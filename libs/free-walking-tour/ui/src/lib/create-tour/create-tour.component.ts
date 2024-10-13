import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '@ceri-web-app/shared-ui';
import { createTourConfig } from '@ceri-web-app/models';

@Component({
  selector: 'lib-create-tour',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent],
  templateUrl: './create-tour.component.html',
  styleUrl: './create-tour.component.css',
})
export class CreateTourComponent {
  createTourConfig: any;

  constructor() {
    this.createTourConfig = createTourConfig;
  }

  formSubmission(event: any) {
    console.log(event);
  }
}
