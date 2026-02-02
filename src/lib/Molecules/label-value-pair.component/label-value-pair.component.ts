// import { Component } from '@angular/core';

// @Component({
//
//   imports: [],
//   templateUrl: './label-value-pair.component.html',
//   styleUrl: './label-value-pair.component.scss',
// })
// export class LabelValuePairComponent {

// }


import { Component, Input } from '@angular/core';

@Component({
  selector: 'upov-label-value',
  standalone: true,
  templateUrl: './label-value-pair.component.html',
  styleUrls: ['./label-value-pair.component.css']
})
export class LabelValuePairComponent {
  @Input() label!: string;
  @Input() value!: string;
}
