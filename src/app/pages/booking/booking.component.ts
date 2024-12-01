import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormComponent } from "../../components/booking-form/booking-form.component";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [BookingFormComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  option: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.option = params.get('option');
    });
  }
}
