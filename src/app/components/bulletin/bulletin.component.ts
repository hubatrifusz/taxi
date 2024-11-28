import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bulletin',
  standalone: true,
  imports: [],
  templateUrl: './bulletin.component.html',
  styleUrl: './bulletin.component.scss',
})
export class BulletinComponent {
  @Input() imageURL!: string;
  @Input() title!: string;
  @Input() content!: string[];
}
