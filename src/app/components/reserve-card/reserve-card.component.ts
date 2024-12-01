import { Component, Input } from '@angular/core';
import { ScrollIntoViewDirective } from '../../directives/scroll-into-view.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reserve-card',
  standalone: true,
  imports: [ScrollIntoViewDirective, RouterModule],
  templateUrl: './reserve-card.component.html',
  styleUrl: './reserve-card.component.scss',
})
export class ReserveCardComponent {
  @Input() title!: string;
  @Input() description!: string[];
  @Input() routerOption!: string[];
}
