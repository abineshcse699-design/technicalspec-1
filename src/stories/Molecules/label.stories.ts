import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { LabelValuePairComponent } from '../../lib/Molecules/label-value-pair.component/label-value-pair.component';

/**
 * Storybook configuration for LabelValueComponent
 */
const meta: Meta<LabelValuePairComponent> = {
  title: 'Molecules/LabelValue',
  component: LabelValuePairComponent,
  decorators: [
    moduleMetadata({
      imports: [LabelValuePairComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A simple label–value pair component used to display read-only information
such as names, identifiers, or codes.

## Usage in Consumer App

\`\`\`typescript
import { LabelValueComponent } from 'upov-ui';

@Component({
  imports: [LabelValueComponent],
  template: \`
    <upov-label-value
      label="Main Common Name(s):"
      value="European Pear">
    </upov-label-value>
  \`
})
export class MyComponent {}
\`\`\`

### Features
- Displays a muted label with a highlighted value
- Designed for summary and metadata sections
- Fully reusable across Subject, Material, and Examination sections
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the value',
    },
    value: {
      control: 'text',
      description: 'Value text associated with the label',
    },
  },
};

export default meta;
type Story = StoryObj<LabelValuePairComponent>;

export const Default: Story = {
  args: {
    label: 'Main Common Name(s):',
    value: 'European Pear',
  },
};

export const Codes: Story = {
  args: {
    label: 'UPOV Code(s):',
    value: 'PYRUS_COM; PYRUS_BCO; PYRUS_CPB; PYRUS_CUS',
  },
};

export const ShortValue: Story = {
  args: {
    label: 'Status:',
    value: 'Draft',
  },
};

export const LongValue: Story = {
  args: {
    label: 'Description:',
    value:
      'These Test Guidelines apply to all varieties of Malpighia emarginata DC, including agricultural and ornamental varieties.',
  },
};

export const InContext: Story = {
  render: () => ({
    imports: [LabelValuePairComponent],
    template: `
      <div
        style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 640px;
          padding: 16px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
        "
      >
        <upov-label-value
          label="Main Common Name(s):"
          value="European Pear">
        </upov-label-value>

        <upov-label-value
          label="UPOV Code(s):"
          value="PYRUS_COM; PYRUS_BCO">
        </upov-label-value>

        <upov-label-value
          label="Family:"
          value="Rosaceae">
        </upov-label-value>

        <upov-label-value
          label="Status:"
          value="Draft">
        </upov-label-value>
      </div>
    `,
  }),
};
