import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  scrolling: number = 100;
  notVisible: boolean = true;

  private clamp(value: number): number {
    return Math.max(0, Math.min(101, value)); // Clamps the value between 0 and 100
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: WheelEvent) {
    const scrolledHeight = window.scrollY;
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (scrollableHeight === scrolledHeight) {
      this.notVisible = false;

      this.scrolling -= 1;
      if (typeof event.deltaY === 'number' && this.scrolling < 100) {
        event.preventDefault();
        this.scrolling = this.clamp(this.scrolling - event.deltaY / 5);
      }
    } else {
      this.scrolling = 100;
      this.notVisible = true;
    }
  }
}
