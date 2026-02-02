import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { YesNoQuestionComponent } from '../../lib/Molecules/yes-no-question.component/yes-no-question.component';

/**
 * Storybook configuration for YesNoQuestionComponent
 */
const meta: Meta<YesNoQuestionComponent> = {
  title: 'Molecules/YesNoQuestion',
  component: YesNoQuestionComponent,
  decorators: [
    moduleMetadata({
      imports: [YesNoQuestionComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A reusable yes/no question component using Angular Material radio buttons.

## Usage in Consumer App

\`\`\`typescript
import { YesNoQuestionComponent } from 'upov-ui';

@Component({
  imports: [YesNoQuestionComponent],
  template: \`
    <upov-yes-no-question
      question="Is a satisfactory crop of fruit required?"
      [required]="true"
      (valueChange)="onAnswer($event)">
    </upov-yes-no-question>
  \`
})
export class MyComponent {
  onAnswer(value: boolean) {
    console.log(value);
  }
}
\`\`\`

### Features
- Displays a yes/no question
- Optional required indicator
- Emits boolean value on change
- Designed for Subject, Material, and Examination sections
        `,
      },
    },
  },
  argTypes: {
    question: {
      control: 'text',
      description: 'Question text displayed above the options',
    },
    required: {
      control: 'boolean',
      description: 'Marks the question as required',
    },
    valueChange: {
      action: 'valueChange',
      description: 'Emits true or false when selection changes',
    },
  },
};

export default meta;
type Story = StoryObj<YesNoQuestionComponent>;


export const Default: Story = {
  args: {
    question: 'Is a satisfactory crop of fruit required?',
    required: false,
  },
};

export const Required: Story = {
  args: {
    question: 'Should clarification be provided?',
    required: true,
  },
};

export const InContext: Story = {
  render: () => ({
    imports: [YesNoQuestionComponent],
    template: `
      <div
        style="
          max-width: 640px;
          padding: 16px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
        "
      >
        <h3 style="margin-bottom: 12px; color: #065f46;">
          1. Subject of the Test Guidelines
        </h3>

        <upov-yes-no-question
          question="Should clarification be provided that any other species or hybrids not explicitly covered by these Test Guidelines should be treated according to TGP/12?"
          [required]="true">
        </upov-yes-no-question>
      </div>
    `,
  }),
};

export const WithInteraction: Story = {
  args: {
    question: 'Is additional examination required?',
    required: true,
  },
};

export const ActionLogging: Story = {
  args: {
    question: 'Should the examination be extended?',
    required: true,
  },
};



export const ExaminationContext: Story = {
  render: () => ({
    imports: [YesNoQuestionComponent],
    template: `
      <div style="
        padding: 20px;
        max-width: 700px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        background: #f9fafb;
      ">
        <h3 style="margin-bottom: 16px; color: #065f46;">
          3.1.3 Fruit Requirements
        </h3>

        <upov-yes-no-question
          question="Is a satisfactory crop of fruit required?"
          [required]="true">
        </upov-yes-no-question>
      </div>
    `,

  }),

};
