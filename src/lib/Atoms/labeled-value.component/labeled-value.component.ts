import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-labeled-value',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labeled-value.component.html',
  styleUrls: ['./labeled-value.component.css']
})
export class LabeledValueComponent {
  @Input() label!: string;
  @Input() value!: string;
}
