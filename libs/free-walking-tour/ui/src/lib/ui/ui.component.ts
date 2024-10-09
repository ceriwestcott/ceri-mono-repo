import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '@ceri-web-app/shared-ui';
import { createTourConfig } from '@ceri-web-app/models';

@Component({
  selector: 'lib-ui',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})
export class UiComponent {
  createTourConfig: any;

  constructor() {
    this.createTourConfig = createTourConfig;
  }
  formSubmission(event: any) {
    console.log(event);
  }
}
