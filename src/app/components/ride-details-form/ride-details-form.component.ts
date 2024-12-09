import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ride-details-form',
  standalone: true,
  imports: [],
  templateUrl: './ride-details-form.component.html',
  styleUrl: './ride-details-form.component.scss',
})
export class RideDetailsFormComponent {
  option: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.option = params.get('option');
    });
  }
}
