import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { GoalContentComponent } from './goal-content/goal-content.component';
import { GoalEditContentComponent } from './goal-edit-content/goal-edit-content.component';
import { GoalItemComponent } from './goals-list/goal-item/goal-item.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { ListTabsComponent } from './goals-list/list-tabs/list-tabs.component';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { GoalItemShimmerComponent } from './goals-list/goal-item-shimmer/goal-item-shimmer.component';
import { AddGoalButtonComponent } from './goals-list/add-goal-button/add-goal-button.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, GoalsRoutingModule, ReactiveFormsModule],
  declarations: [
    GoalsListComponent,
    GoalContentComponent,
    GoalsComponent,
    GoalItemComponent,
    ListTabsComponent,
    GoalEditContentComponent,
    GoalItemShimmerComponent,
    AddGoalButtonComponent
  ]
})
export class GoalsModule {}
