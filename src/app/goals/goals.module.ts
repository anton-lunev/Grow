import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { GoalItemComponent } from './goals-list/goal-item/goal-item.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { ListTabsComponent } from './goals-list/list-tabs/list-tabs.component';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { GoalItemShimmerComponent } from './goals-list/goal-item-shimmer/goal-item-shimmer.component';
import { AddGoalButtonComponent } from './goals-list/add-goal-button/add-goal-button.component';
import { TodoComponent } from './goal-details/todo/todo.component';
import { TodoListComponent } from './goal-details/todo-list/todo-list.component';
import { AddTodoComponent } from './goal-details/add-todo/add-todo.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, GoalsRoutingModule, ReactiveFormsModule],
  declarations: [
    GoalsListComponent,
    GoalDetailsComponent,
    GoalsComponent,
    GoalItemComponent,
    ListTabsComponent,
    GoalItemShimmerComponent,
    AddGoalButtonComponent,
    TodoComponent,
    TodoListComponent,
    AddTodoComponent
  ]
})
export class GoalsModule {}
