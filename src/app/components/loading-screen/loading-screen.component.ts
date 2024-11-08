import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss',
})
export class LoadingScreenComponent {
  @ViewChild('loadingScreen') loadingScreen!: ElementRef;
  @HostListener('window:load')
  removelLoadingScreen() {
    this.loadingScreen.nativeElement.style.display = 'none';
  }
}
