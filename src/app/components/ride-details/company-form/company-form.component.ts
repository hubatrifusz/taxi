import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './company-form.component.html',
  styleUrl: './company-form.component.scss',
})
export class CompanyFormComponent {
  @Output() formData = new EventEmitter<any>();
  @Output() previous = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();

  formValues = {
    from: '',
    to: '',
    passengerNumber: '',
    datetime: '',
    length: '',
    waitTime: '',
    comment: '',
  };

  onPrevious() {
    this.previous.emit();
  }

  onSubmit() {
    this.formData.emit(this.formValues);
    this.submit.emit();

    console.log(this.formValues);

  }
}
