import { Component } from '@angular/core';
import { ReserveCardComponent } from "../../components/reserve-card/reserve-card.component";
import { BulletinComponent } from "../../components/bulletin/bulletin.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ReserveCardComponent, BulletinComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
