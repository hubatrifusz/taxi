import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent implements AfterViewInit {
  @ViewChild('logo') logoElement!: ElementRef;

  ngAfterViewInit() {
    console.log('Div has loaded:', this.logoElement.nativeElement);
    const logo = this.logoElement.nativeElement;

    logo.children[1].style.fontSize = logo.offsetHeight / 3.5 + 'px';

    let spans = Array.from(
      logo.children[0].children as HTMLCollectionOf<HTMLSpanElement>
    );

    spans.forEach((span: HTMLSpanElement) => {
      span.style.height = logo.offsetHeight + 'px';
    });
  }
}
