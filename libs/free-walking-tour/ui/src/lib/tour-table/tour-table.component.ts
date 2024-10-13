import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '@ceri-web-app/shared-ui';
import { WalkingTour, WalkingTourMock } from '@ceri-web-app/util';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'lib-create-tour',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent, RouterLink, TableModule],
  templateUrl: './tour-table.component.html',
  styleUrl: './tour-table.component.css',
})
export class TourTableComponent {
  @Input({
    required: true,
  })
  tours: WalkingTour[] = WalkingTourMock;
  protected readonly Math = Math;
}
