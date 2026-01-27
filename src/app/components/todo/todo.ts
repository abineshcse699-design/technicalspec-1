import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Todo {
  title: string;
  done: boolean;
}

@Component({

  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']


})

export class TodoComponent {
  @Input() todo!: Todo;
  @Output() onDone = new EventEmitter<string>();

  toggle() {
    this.onDone.emit('hi');
  }
}
