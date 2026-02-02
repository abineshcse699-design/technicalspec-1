



import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'upov-yes-no-question.component',
    imports: [CommonModule, MatButton, MatRadioModule],
  standalone: true,
  templateUrl: './yes-no-question.component.html',
  styleUrls: ['./yes-no-question.component.css']
})
export class YesNoQuestionComponent {
  @Input() question!: string;
  @Input() required = false;

  @Output() valueChange = new EventEmitter<boolean>();

  selected?: boolean;

  onChange(value: boolean) {
    this.selected = value;
    this.valueChange.emit(value);
  }
}
