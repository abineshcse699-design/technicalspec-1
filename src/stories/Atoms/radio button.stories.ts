import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { RadioButtonComponent } from '../../lib/Atoms/radio-button.component/radio-button.component';

const meta: Meta<RadioButtonComponent> = {
  title: 'Atoms/Radio Button',
  component: RadioButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [RadioButtonComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A custom radio button component with label support.
Emits a value when selected.
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Radio button label',
    },
    value: {
      control: 'text',
      description: 'Value emitted on selection',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is selected',
    },
    selected: {
      action: 'selected',
      description: 'Emits when radio is selected',
    },
  },
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Option A',
    value: 'A',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Option A',
    value: 'A',
    checked: true,
  },
};

export const RadioGroupExample: Story = {
  render: () => {
    let selected = 'A';

    return {
      template: `
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <upov-radio-button
            label="Option A"
            value="A"
            [checked]="selected === 'A'"
            (selected)="onSelect($event)"
          ></upov-radio-button>

          <upov-radio-button
            label="Option B"
            value="B"
            [checked]="selected === 'B'"
            (selected)="onSelect($event)"
          ></upov-radio-button>

          <upov-radio-button
            label="Option C"
            value="C"
            [checked]="selected === 'C'"
            (selected)="onSelect($event)"
          ></upov-radio-button>
        </div>
      `,
      props: {
        selected,
        onSelect: (value: string) => {
          selected = value;
        },
      },
    };
  },
};



export const InForm: Story = {
  render: () => ({
    template: `
      <div style="
        padding: 16px;
        background: white;
        border-radius: 8px;
        max-width: 320px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      ">
        <h4 style="margin-top: 0;">Select priority</h4>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <upov-radio-button label="Low" value="low"></upov-radio-button>
          <upov-radio-button label="Medium" value="medium" [checked]="true"></upov-radio-button>
          <upov-radio-button label="High" value="high"></upov-radio-button>
        </div>
      </div>
    `,
  }),
};
