import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Component } from '@angular/core';

@Component({
  selector: 'storybook-checkbox-group',
  template: `
    <form [formGroup]="form">
      <div class="flex flex-wrap gap-6">
        <mat-checkbox formControlName="asterics">
          Asterics characteristic
        </mat-checkbox>

        <mat-checkbox formControlName="grouping">
          Grouping characteristics
        </mat-checkbox>

        <mat-checkbox formControlName="tq5">
          Add to TQ5 characteristics
        </mat-checkbox>
      </div>
    </form>
  `,
  styles: [`.flex { display: flex; flex-wrap: wrap; gap: 1.5rem; }`]
})
class CheckboxGroupComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      asterics: [false],
      grouping: [false],
      tq5: [false],
    });
  }
}

export default {
  title: 'Tspec/CheckboxGroup',
  component: CheckboxGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, MatCheckboxModule],
      declarations: [CheckboxGroupComponent],
    }),

  ],
  
} as Meta<CheckboxGroupComponent>;

type Story = StoryObj<CheckboxGroupComponent>;

export const Default: Story = {
  args: {},
};