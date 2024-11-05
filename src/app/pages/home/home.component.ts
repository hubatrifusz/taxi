import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RenderComponent } from "../../components/render/render.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RenderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
