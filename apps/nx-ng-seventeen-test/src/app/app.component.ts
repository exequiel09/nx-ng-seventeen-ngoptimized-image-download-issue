import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  selector: 'nx-ng-seventeen-test-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-ng-seventeen-test';
}
