import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DividerComponent } from '../../lib/Atoms/divider.component/divider.component';

const meta: Meta<DividerComponent> = {
  title: 'Atoms/Divider',
  component: DividerComponent,
  decorators: [
    moduleMetadata({
      imports: [DividerComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A simple horizontal divider used to separate content sections.

## Usage

\`\`\`html
<upov-divider></upov-divider>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DividerComponent>;

export const Default: Story = {};

export const BetweenContent: Story = {
  render: () => ({
    template: `
      <div style="max-width: 400px;">
        <p>Section one content</p>
        <upov-divider></upov-divider>
        <p>Section two content</p>
      </div>
    `,
  }),
};

export const InCard: Story = {
  render: () => ({
    template: `
      <div style="
        background: white;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        max-width: 400px;
      ">
        <h3 style="margin-top: 0;">Card title</h3>
        <p>Some content inside the card.</p>
        <upov-divider></upov-divider>
        <p style="color: #666;">Footer content</p>
      </div>
    `,
  }),
};

export const ListLayout: Story = {
  render: () => ({
    template: `
      <div style="max-width: 400px;">
        <div>Item one</div>
        <upov-divider></upov-divider>
        <div>Item two</div>
        <upov-divider></upov-divider>
        <div>Item three</div>
      </div>
    `,
  }),
};
