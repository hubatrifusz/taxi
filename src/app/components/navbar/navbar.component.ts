import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showNavbar = false;
  open = false;

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  openNavbar() {
    const topSpan = document.querySelector('.navIcon')!.children[0];
    const bottomSpan = document.querySelector('.navIcon')!.children[1];
    topSpan.classList.toggle('open')
    bottomSpan.classList.toggle('open');

    this.showNavbar = !this.showNavbar;
  }

}
