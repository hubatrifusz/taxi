import { Component } from '@angular/core';
import { AboutItemComponent } from "../../components/about-item/about-item.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutItemComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
