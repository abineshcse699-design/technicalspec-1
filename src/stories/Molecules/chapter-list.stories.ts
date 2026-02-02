import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ChapterListItemComponent } from '../../lib/Molecules/chapter-list-item.component/chapter-list-item.component';

const meta: Meta<ChapterListItemComponent> = {
  title: 'Molecules/Chapter List Item',
  component: ChapterListItemComponent,
  decorators: [
    moduleMetadata({
      imports: [ChapterListItemComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A chapter list item used in the left sidebar navigation.

## Usage

\`\`\`typescript
import { ChapterListItemComponent } from 'upov-ui';

@Component({
  imports: [ChapterListItemComponent],
  template: \`
    <upov-chapter-list-item.component
      id="01"
      label="Subject"
      [active]="true">
    </upov-chapter-list-item.component>
  \`
})
export class MyComponent {}
\`\`\`

### Features
- Displays chapter number inside a circular badge
- Supports active and inactive states
- Emits a select event when clicked
- Designed for sidebar navigation
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Chapter number or identifier',
    },
    label: {
      control: 'text',
      description: 'Chapter label',
    },
    active: {
      control: 'boolean',
      description: 'Marks the chapter as active',
    },
    select: {
      action: 'select',
      description: 'Emitted when the chapter item is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<ChapterListItemComponent>;

export const Default: Story = {
  args: {
    id: '01',
    label: 'Subject',
    active: false,
  },
};

export const Active: Story = {
  args: {
    id: '02',
    label: 'Material',
    active: true,
  },
};


export const InSidebarContext: Story = {
  render: () => ({
    imports: [ChapterListItemComponent],
    template: `
      <div style="
        width: 240px;
        background: white;
        border-right: 1px solid #e5e7eb;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      ">
        <upov-chapter-list-item
          id="01"
          label="Subject">
        </upov-chapter-list-item>

        <upov-chapter-list-item
          id="02"
          label="Material"
          [active]="true">
        </upov-chapter-list-item>

        <upov-chapter-list-item
          id="03"
          label="Examination">
        </upov-chapter-list-item>
      </div>
    `,
  }),
};


export const LongLabel: Story = {
  args: {
    id: '10',
    label: 'Technical Questionnaire and Documentation',
    active: false,
  },
};

export const FullChapterList: Story = {
  render: () => ({
    imports: [ChapterListItemComponent],
    template: `
      <div style="
        width: 260px;
        background: white;
        border-right: 1px solid #e5e7eb;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      ">
        <upov-chapter-list-item id="01" label="Subject"></upov-chapter-list-item>
        <upov-chapter-list-item id="02" label="Material"></upov-chapter-list-item>
        <upov-chapter-list-item id="03" label="Examination" [active]="true"></upov-chapter-list-item>
        <upov-chapter-list-item id="04" label="Assessment"></upov-chapter-list-item>
        <upov-chapter-list-item id="05" label="Grouping"></upov-chapter-list-item>
        <upov-chapter-list-item id="06" label="Characteristics"></upov-chapter-list-item>
        <upov-chapter-list-item id="07" label="Table of characteristics"></upov-chapter-list-item>
        <upov-chapter-list-item id="08" label="Explanations"></upov-chapter-list-item>
        <upov-chapter-list-item id="09" label="Literature"></upov-chapter-list-item>
        <upov-chapter-list-item id="10" label="Technical Questionnaire"></upov-chapter-list-item>
        <upov-chapter-list-item id="11" label="Annex"></upov-chapter-list-item>
      </div>
    `,
  }),
};

