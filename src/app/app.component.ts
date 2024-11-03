import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LogoComponent } from "./components/logo/logo.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CursorComponent } from "./components/cursor/cursor.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LogoComponent, FooterComponent, CursorComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'taxi';
}
