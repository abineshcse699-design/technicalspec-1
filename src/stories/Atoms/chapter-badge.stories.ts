import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ChapterBadgeComponent } from '../../lib/Atoms/chapter-badge.component/chapter-badge.component';

const meta: Meta<ChapterBadgeComponent> = {
  title: 'Atoms/Chapter Badge',
  component: ChapterBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [ChapterBadgeComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A circular chapter badge used to display step or chapter numbers.
Supports an **active** state for the current step.
        `,
      },
    },
  },
  argTypes: {
    number: {
      control: 'text',
      description: 'Chapter or step number',
    },
    active: {
      control: 'boolean',
      description: 'Marks the badge as active',
    },
  },
};

export default meta;
type Story = StoryObj<ChapterBadgeComponent>;

export const Default: Story = {
  args: {
    number: '1',
    active: false,
  },
};

export const Active: Story = {
  args: {
    number: '1',
    active: true,
  },
};

export const Inactive: Story = {
  args: {
    number: '2',
    active: false,
  },
};

export const MultipleChapters: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px;">
        <upov-chapter-badge number="1" [active]="true"></upov-chapter-badge>
        <upov-chapter-badge number="2"></upov-chapter-badge>
        <upov-chapter-badge number="3"></upov-chapter-badge>
        <upov-chapter-badge number="4"></upov-chapter-badge>
      </div>
    `,
  }),
};


export const WithLabels: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <upov-chapter-badge.component number="1" [active]="true"></upov-chapter-badge.component>
          <span>Introduction</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <upov-chapter-badge.component number="2"></upov-chapter-badge.component>
          <span>Details</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <upov-chapter-badge.component number="3"></upov-chapter-badge.component>
          <span>Review</span>
        </div>
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px;">
        <upov-chapter-badge number="1" [active]="true"></upov-chapter-badge>
        <upov-chapter-badge number="2"></upov-chapter-badge>
        <upov-chapter-badge number="3"></upov-chapter-badge>
      </div>
    `,
  }),
};
