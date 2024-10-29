import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showNavbar = false;

  openNavbar() {
    const topSpan = document.querySelector('.navIcon')!.children[0];
    const bottomSpan = document.querySelector('.navIcon')!.children[1];
    topSpan.classList.toggle('open')
    bottomSpan.classList.toggle('open');

    this.showNavbar = !this.showNavbar;
  }

}
