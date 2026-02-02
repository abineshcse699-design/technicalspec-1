import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-icon1',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon-component.html',
  styleUrls: ['./icon-component.css'],
})
export class IconComponent {

  /** Material icon name (arrow_back, expand_more, etc.) */
  @Input() name?: string;

  /** SVG path for custom icons */
  @Input() svgPath?: string;

  /** Icon size in px */
  @Input() size: number = 20;

  /** Icon color */
  @Input() color: string = 'currentColor';

  /** Accessibility label */
  @Input() ariaLabel: string = 'icon';
}
