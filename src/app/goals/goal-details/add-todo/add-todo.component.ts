import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'grow-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {
  @Output() add = new EventEmitter<string>();
  title: string;

  addTodo() {
    this.add.emit(this.title);
    this.title = '';
  }
}
