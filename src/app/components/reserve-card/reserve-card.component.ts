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
  @Input() title: string = 'placeholder';
  @Input() description: string =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam asperiores accusantium amet quae nemo explicabo ipsum dolorem?';
}
