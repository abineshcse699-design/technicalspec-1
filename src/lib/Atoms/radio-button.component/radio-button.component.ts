// import { Component } from '@angular/core';

// @Component({
//
//   imports: [],
//   templateUrl: './radio-button.component.html',
//   styleUrl: './radio-button.component.scss',
// })
// export class RadioButtonComponent {

// }



import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upov-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
})
export class RadioButtonComponent {
  @Input() label!: string;
  @Input() value!: string;
  @Input() checked = false;
  @Output() selected = new EventEmitter<string>();

  select() {
    this.selected.emit(this.value);
  }
}
