import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TodoComponent, Todo } from './todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const meta: Meta<TodoComponent> = {
  title: 'Todo',
  component: TodoComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<TodoComponent>;

export const NotDone: Story = {

  args: {
    todo: {
      title: 'some todo item I need todo',
      done: false,
    },
  },

};

export const Done: Story = {

  args: {
    todo: {
      title: 'some todo item I need todo',
      done: true,
    },
  },
  
};

