import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { Tspec } from './tspec';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

export default {
  title: 'Components/Tspec',
  component: Tspec,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatChipsModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],

    }),

  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<Tspec>;

type Story = StoryObj<Tspec>;

export const Default: Story = {};

export const WithCustomValues: Story = {
  play: async ({ canvasElement }) => {
    // You can add interactions here if needed
  },
};
