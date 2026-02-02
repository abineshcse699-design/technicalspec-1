import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LabeledValueComponent } from '../../lib/Atoms/labeled-value.component/labeled-value.component';

const meta: Meta<LabeledValueComponent> = {
  title: 'Atoms/Labeled Value',
  component: LabeledValueComponent,
  decorators: [
    moduleMetadata({
      imports: [LabeledValueComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A simple component to display a label-value pair.

## Usage

\`\`\`html
<upov-labeled-value
  label="Species"
  value="Rosa hybrida">
</upov-labeled-value>
\`\`\`

### Features
- Clean label/value separation
- Ideal for metadata, summaries, and tables
- Consistent typography
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    value: {
      control: 'text',
      description: 'Displayed value',
    },
  },
};

export default meta;
type Story = StoryObj<LabeledValueComponent>;

export const Default: Story = {
  args: {
    label: 'Label',
    value: 'Value',
  },
};

export const SpeciesName: Story = {
  args: {
    label: 'Species',
    value: 'Rosa hybrida',
  },
};

export const Status: Story = {
  args: {
    label: 'Status',
    value: 'Updated',
  },
};

export const MultipleFields: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <upov-labeled-value label="Species" value="Rosa hybrida"></upov-labeled-value>
        <upov-labeled-value label="Family" value="Rosaceae"></upov-labeled-value>
        <upov-labeled-value label="Origin" value="Europe"></upov-labeled-value>
      </div>
    `,
  }),
};

export const InCard: Story = {
  render: () => ({
    template: `
      <div style="padding: 16px; background: white; border-radius: 8px; width: 240px;">
        <upov-labeled-value label="Species" value="Tulipa gesneriana"></upov-labeled-value>
        <upov-labeled-value label="Status" value="New"></upov-labeled-value>
        <upov-labeled-value label="Last Updated" value="2024-01-29"></upov-labeled-value>
      </div>
    `,
  }),
};


export const InTableLikeLayout: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
        <upov-labeled-value label="Species" value="Malus domestica"></upov-labeled-value>
        <upov-labeled-value label="Status" value="Pending"></upov-labeled-value>
        <upov-labeled-value label="Updated" value="2024-01-25"></upov-labeled-value>
      </div>
    `,
  }),
};

export const LongValue: Story = {
  args: {
    label: 'Description',
    value: 'A perennial flowering plant cultivated worldwide for ornamental purposes.',
  },
};
