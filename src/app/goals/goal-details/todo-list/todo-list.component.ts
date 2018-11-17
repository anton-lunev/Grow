import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../state/todos/todo.model';

@Component({
  selector: 'grow-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() sortedIds: string[];
  @Output() add = new EventEmitter<string>();
  @Output() update = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() {}

  trackByData(data: Todo) {
    return data.done + data.id;
  }
}
