import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IconComponent } from '../../lib/Atoms/icon-component/icon-component';

const meta: Meta<IconComponent> = {
  title: 'Atoms/Icon1',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [IconComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A reusable **Icon Atom** that supports both **Angular Material icons**
and **custom SVG icons**.

## Usage

\`\`\`ts
import { IconComponent } from 'upov-ui';

@Component({
  imports: [IconComponent],
  template: \`
    <upov-icon name="arrow_back" size="18" color="#14532d"></upov-icon>
  \`
})
export class ExampleComponent {}
\`\`\`

### Features
- Material icon support
- Inline SVG support
- Custom size & color
- Accessible by default
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Material icon name (e.g. arrow_back, check_circle)',
    },
    svgPath: {
      control: 'text',
      description: 'SVG path string for custom icons',
    },
    size: {
      control: 'number',
      description: 'Icon size in pixels',
    },
    color: {
      control: 'color',
      description: 'Icon color',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label',
    },
  },
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    name: 'arrow_back',
    size: 20,
    color: '#14532d',
    ariaLabel: 'Back',
  },
};

export const CheckCircle: Story = {
  args: {
    name: 'check_circle',
    size: 18,
    color: '#a3e635',
    ariaLabel: 'Submit',
  },
};

export const SvgIcon: Story = {
  args: {
    svgPath:
      'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z',
    size: 22,
    color: '#14532d',
    ariaLabel: 'Logout',
  },
};


export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:16px; align-items:center;">
        <upov-icon name="star" size="16"></upov-icon>
        <upov-icon name="star" size="20"></upov-icon>
        <upov-icon name="star" size="28"></upov-icon>
        <upov-icon name="star" size="36"></upov-icon>
      </div>
    `,
  }),
};


export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:16px; align-items:center;">
        <upov-icon name="info" color="#2563eb"></upov-icon>
        <upov-icon name="warning" color="#f59e0b"></upov-icon>
        <upov-icon name="check_circle" color="#16a34a"></upov-icon>
        <upov-icon name="error" color="#dc2626"></upov-icon>
      </div>
    `,
  }),
};

export const InContext: Story = {
  render: () => ({
    template: `
      <button style="display:flex; gap:8px; align-items:center; padding:8px 12px; border-radius:20px; background:#14532d; color:#a3e635; border:none;">
        <upov-icon name="check_circle" size="18" color="#a3e635"></upov-icon>
        Submit
      </button>
    `,
  }),
};
