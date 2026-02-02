import { Component, Input } from '@angular/core';

@Component({
  selector: 'upov-preview-card',
  standalone: true,
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.css']
})
export class PreviewCardComponent {
  @Input() text!: string;
}
