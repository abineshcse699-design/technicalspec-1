import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-button',
  imports: [FormsModule,CommonModule],
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})

export class AppButtonComponent {

  @Input() label: string = '';
  @Input() type: 'primary' | 'secondary' = 'primary';

}
