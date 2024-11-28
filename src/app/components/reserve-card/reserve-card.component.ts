import { Component, Input } from '@angular/core';
import { ScrollIntoViewDirective } from '../../directives/scroll-into-view.directive';

@Component({
  selector: 'app-reserve-card',
  standalone: true,
  imports: [ScrollIntoViewDirective],
  templateUrl: './reserve-card.component.html',
  styleUrl: './reserve-card.component.scss',
})
export class ReserveCardComponent {
  @Input() title!: string;
  @Input() description!: string[];
}
