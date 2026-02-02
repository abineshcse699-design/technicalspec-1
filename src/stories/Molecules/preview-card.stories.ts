import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { PreviewCardComponent } from '../../lib/Molecules/preview-card.component/preview-card.component';

/**
 * Storybook configuration for PreviewCardComponent
 */
const meta: Meta<PreviewCardComponent> = {
  title: 'Molecules/PreviewCard',
  component: PreviewCardComponent,
  decorators: [
    moduleMetadata({
      imports: [PreviewCardComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A lightweight preview card used to display dynamically generated preview text.

## Usage in Consumer App

\`\`\`typescript
import { PreviewCardComponent } from 'upov-ui';

@Component({
  imports: [PreviewCardComponent],
  template: \`
    <upov-preview-card
      [text]="'These Test Guidelines apply to all varieties of Malus domestica.'">
    </upov-preview-card>
  \`
})
export class MyComponent {}
\`\`\`

### Features
- Simple card layout for previewing generated content
- Highlighted "PREVIEW" header with icon
- Designed for use in Subject, Material, and Examination sections
        `,
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Preview text content',
    },
  },
};

export default meta;
type Story = StoryObj<PreviewCardComponent>;

export const Default: Story = {
  args: {
    text: 'These Test Guidelines apply to all varieties of Malpighia emarginata DC.',
  },
};

export const LongText: Story = {
  args: {
    text: `
These Test Guidelines apply to all varieties of Malpighia emarginata DC.
In the case of agricultural varieties, additional characteristics may be
required in order to examine Distinctness, Uniformity and Stability.
    `.trim(),
  },
};

export const MultipleCards: Story = {
  render: () => ({
    imports: [PreviewCardComponent],
    template: `
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
          background: #ffffff;
          max-width: 640px;
        "
      >
        <upov-preview-card
          [text]="'3.1.1 The minimum duration of tests should normally be two independent growing cycles.'">
        </upov-preview-card>

        <upov-preview-card
          [text]="'3.1.2 The two independent growing cycles may be observed from a single planting.'">
        </upov-preview-card>

        <upov-preview-card
          [text]="'3.1.3 In particular, it is essential that the trees produce a satisfactory crop.'">
        </upov-preview-card>
      </div>
    `,
  }),
};


export const InContext: Story = {
  render: () => ({
    imports: [PreviewCardComponent],
    template: `
      <div style="padding: 16px; background: white; max-width: 600px;">
        <h3 style="margin-bottom: 8px; color: #065f46;">
          1. Subject of the Test Guidelines
        </h3>

        <p style="margin-bottom: 12px; color: #374151;">
          Below is a generated preview of the current configuration:
        </p>

        <upov-preview-card
          text="These Test Guidelines apply to all varieties of Argania spinosa (L.) Skeels.">
        </upov-preview-card>
      </div>
    `,
  }),
};

