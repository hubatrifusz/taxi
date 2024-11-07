import { Component } from '@angular/core';
import { ReserveCardComponent } from "../../components/reserve-card/reserve-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ReserveCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
