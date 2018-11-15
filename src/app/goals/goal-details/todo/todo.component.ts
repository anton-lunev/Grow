import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { Todo } from '../../state/todos/todo.model';

@AutoUnsubscribe()
@Component({
  selector: 'grow-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() todo: Todo;
  @Output() update = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();

  control: FormControl;
  sub: Subscription;

  ngOnInit() {
    this.control = new FormControl(this.todo.done);

    this.sub = this.control.valueChanges.subscribe((done: boolean) => {
      this.update.emit({ ...this.todo, done });
    });
  }

  ngOnDestroy() {}
}
