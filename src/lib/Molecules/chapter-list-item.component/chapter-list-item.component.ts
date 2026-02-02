


import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'upov-chapter-list-item',
  standalone: true,
  templateUrl: './chapter-list-item.component.html',
  styleUrls: ['./chapter-list-item.component.css']
})
export class ChapterListItemComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() active = false;

  @Output() select = new EventEmitter<void>();
}
