import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { GoalsDetailsRoutingModule } from './goal-details-routing.module';
import { GoalDetailsComponent } from './goal-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, GoalsDetailsRoutingModule, ReactiveFormsModule],
  declarations: [TodoComponent, TodoListComponent, AddTodoComponent, GoalDetailsComponent]
})
export class GoalDetailsModule {}
