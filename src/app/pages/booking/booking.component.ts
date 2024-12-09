import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toArray } from 'rxjs';
import { PersonalDetailsFormComponent } from '../../components/personal-details-form/personal-details-form.component';
import { RideDetailsFormComponent } from '../../components/ride-details-form/ride-details-form.component';
import { CompanyFormComponent } from "../../components/ride-details/company-form/company-form.component";
import { FormOverviewComponent } from "../../components/form-overview/form-overview.component";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [PersonalDetailsFormComponent, RideDetailsFormComponent, CompanyFormComponent, FormOverviewComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  option: string | null = null;
  currentPage = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.option = params.get('option');
    });
  }

  formData: { [key: string]: any } = {};

  updateFormData(data: any) {
    this.formData = { ...this.formData, ...data };
  }

  goToNextPage() {
    this.currentPage++;
  }

  goToPreviousPage() {
    this.currentPage--;
  }

  showOverview() {
    this.currentPage = 3;
  }
}
