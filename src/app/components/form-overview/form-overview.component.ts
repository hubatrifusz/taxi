import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-overview.component.html',
  styleUrl: './form-overview.component.scss',
})
export class FormOverviewComponent {
  @Input() data: any;
}
