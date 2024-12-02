import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toArray } from 'rxjs';
import { PersonalDetailsFormComponent } from "../../components/personal-details-form/personal-details-form.component";
import { RideDetailsFormComponent } from "../../components/ride-details-form/ride-details-form.component";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [PersonalDetailsFormComponent, RideDetailsFormComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  option: string | null = null;
  index = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.option = params.get('option');
    });
  }

  progressBarNext() {
    const progressBar = document.querySelector('#progress-bar') as HTMLElement;
    const progressComponents = Array.from(progressBar.children);

    if (this.index == 2) {
      return;
    }

    progressComponents[this.index].classList.remove('active');
    progressComponents[this.index + 1].classList.add('active');
    this.index++;
  }

  progressBarPrevious() {
    const progressBar = document.querySelector('#progress-bar') as HTMLElement;
    const progressComponents = Array.from(progressBar.children);

    if (this.index == 0) {
      return;
    }

    progressComponents[this.index].classList.remove('active');
    progressComponents[this.index - 1].classList.add('active');
    this.index--;
  }
}
