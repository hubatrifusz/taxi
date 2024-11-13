import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollIntoView]',
  standalone: true,
})
export class ScrollIntoViewDirective {
  @Input('appScrollIntoView') highlightClass: string = 'in-view';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.highlightClass);

        } else {
          this.renderer.removeClass(this.el.nativeElement, this.highlightClass);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
