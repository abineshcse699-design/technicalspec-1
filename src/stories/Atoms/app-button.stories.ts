import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AppButtonComponent } from '../../lib/Atoms/app-button.component/app-button.component';

const meta: Meta<AppButtonComponent> = {
  title: 'Atoms/AppButton',
  component: AppButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [AppButtonComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `

A simple button component used for primary and secondary actions.

## Usage

\`\`\`typescript
import { AppButtonComponent } from 'upov-ui';

@Component({
  imports: [AppButtonComponent],
  template: \`
    <app-button
      label="Save"
      type="primary">
    </app-button>
  \`
})
export class MyComponent {}
\`\`\`

### Features
- Two variants: primary, secondary
- Rounded pill-style button
- Reusable across forms and tables
        `,
      },
    },

  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button style type',
    },
  },
};

export default meta;
type Story = StoryObj<AppButtonComponent>;

/* -------------------------------------------------------------------------- */
/*                                   Basics                                   */
/* -------------------------------------------------------------------------- */

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    type: 'secondary',
  },
};

/* -------------------------------------------------------------------------- */
/*                                All Variants                                */
/* -------------------------------------------------------------------------- */

export const AllTypes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <app-button label="Primary" type="primary"></app-button>
        <app-button label="Secondary" type="secondary"></app-button>
      </div>
    `,
  }),
};

/* -------------------------------------------------------------------------- */
/*                                In Context                                  */
/* -------------------------------------------------------------------------- */

export const InContext: Story = {
  render: () => ({
    template: `
      <div style="padding: 16px; background: white; border-radius: 8px; max-width: 400px;">
        <h3 style="margin: 0 0 8px 0;">Edit Species</h3>
        <p style="margin: 0 0 16px 0; color: #666;">
          Update the botanical information below.
        </p>
        <div style="display: flex; gap: 12px;">
          <app-button label="Cancel" type="secondary"></app-button>
          <app-button label="Save" type="primary"></app-button>
        </div>
      </div>
    `,
  }),
};

/* -------------------------------------------------------------------------- */
/*                               In Table                                     */
/* -------------------------------------------------------------------------- */

export const InTable: Story = {
  render: () => ({
    template: `
      <table style="width: 100%; border-collapse: collapse; background: white;">
        <thead style="background: #f5f5f5;">
          <tr>
            <th style="padding: 12px; text-align: left;">Species</th>
            <th style="padding: 12px; text-align: left;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-top: 1px solid #e0e0e0;">
            <td style="padding: 12px;">Rosa hybrida</td>
            <td style="padding: 12px; display: flex; gap: 8px;">
              <app-button label="Edit" type="secondary"></app-button>
              <app-button label="Save" type="primary"></app-button>
            </td>
          </tr>
        </tbody>
      </table>
    `,
  }),
};
