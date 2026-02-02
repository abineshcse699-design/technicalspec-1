

import { Component, Input } from '@angular/core';

@Component({
  selector: 'upov-chapter-badge',
  templateUrl: './chapter-badge.component.html',
  styleUrls: ['./chapter-badge.component.css'],
})
export class ChapterBadgeComponent {
  @Input() number!: string;
  @Input() active = false;
}
