import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-quiz-feature',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz-feature.component.html',
  styleUrl: './quiz-feature.component.css',
})
export class QuizFeatureComponent {}
