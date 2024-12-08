import { Component, Input } from '@angular/core';
import { ScrollIntoViewDirective } from '../../directives/scroll-into-view.directive';

@Component({
  selector: 'app-about-item',
  standalone: true,
  imports: [ScrollIntoViewDirective],
  templateUrl: './about-item.component.html',
  styleUrl: './about-item.component.scss',
})
export class AboutItemComponent {
  @Input() caption1!: string;
  @Input() caption2!: string;
  @Input() description1!: string;
  @Input() description2!: string;
  @Input() imageURL1!: string;
  @Input() imageURL2!: string;
}
