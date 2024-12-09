import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-details-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personal-details-form.component.html',
  styleUrl: './personal-details-form.component.scss',
})
export class PersonalDetailsFormComponent {
  @Output() formData = new EventEmitter<any>();
  @Output() next = new EventEmitter<void>();

  formValues = {
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
  };

  onNext() {
    this.formData.emit(this.formValues);
    this.next.emit();
  }
}
