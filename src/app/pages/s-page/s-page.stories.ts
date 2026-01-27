import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { SPageComponent } from './s-page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';



export default {
  title: 'Pages/SPage',
  component: SPageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        MatExpansionModule,
        MatRadioModule,
        MatCardModule,
        MatIconModule,
        MatNavList,
        MatFormFieldModule,
        MatButtonModule,
        BrowserAnimationsModule,
        Header,
        Footer,
        SPageComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<SPageComponent>;

type Story = StoryObj<SPageComponent>;

export const Default: Story = {};

export const SubjectView: Story = {
  play: async ({ canvasElement }) => {
    const component = canvasElement as any;
    if (component.componentInstance) {
      component.componentInstance.showSubjectOnly = true;
    }
  },
};

export const MaterialView: Story = {
  play: async ({ canvasElement }) => {
    const component = canvasElement as any;
    if (component.componentInstance) {
      component.componentInstance.showMaterialOnly = true;
    }
  },
};

export const ExaminationView: Story = {
  play: async ({ canvasElement }) => {
    const component = canvasElement as any;
    if (component.componentInstance)
       {
      component.componentInstance.showExaminationOnly = true;

    }

  },

};
