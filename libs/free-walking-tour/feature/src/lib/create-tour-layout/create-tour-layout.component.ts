import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTourComponent } from '@ceri-web-app/walking-tour-ui';

@Component({
  selector: 'lib-create-tour-layout',
  standalone: true,
  imports: [CommonModule, CreateTourComponent],
  templateUrl: './create-tour-layout.component.html',
  styleUrl: './create-tour-layout.component.css',
})
export class CreateTourLayoutComponent {}
