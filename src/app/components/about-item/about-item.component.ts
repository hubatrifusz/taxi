import { Component } from '@angular/core';
import { ScrollIntoViewDirective } from '../../directives/scroll-into-view.directive';

@Component({
  selector: 'app-about-item',
  standalone: true,
  imports: [ScrollIntoViewDirective],
  templateUrl: './about-item.component.html',
  styleUrl: './about-item.component.scss',
})
export class AboutItemComponent {}
