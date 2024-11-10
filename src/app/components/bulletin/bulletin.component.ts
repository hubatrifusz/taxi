import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bulletin',
  standalone: true,
  imports: [],
  templateUrl: './bulletin.component.html',
  styleUrl: './bulletin.component.scss',
})
export class BulletinComponent {
  @Input() title: string = '*placeholder*';
  @Input() content: string[] = ['list item 1', 'list item 2', 'list item 3'];
}
