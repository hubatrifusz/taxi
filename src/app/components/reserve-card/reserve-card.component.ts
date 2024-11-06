import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reserve-card',
  standalone: true,
  imports: [],
  templateUrl: './reserve-card.component.html',
  styleUrl: './reserve-card.component.scss',
})
export class ReserveCardComponent {
  @Input() title: string = 'placeholder';
}
