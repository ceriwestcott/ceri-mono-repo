import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css',
})
export class SplashComponent {}
