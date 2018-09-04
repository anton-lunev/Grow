import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { GoalContentComponent } from './goal-content/goal-content.component';
import { GoalItemComponent } from './goals-list/goal-item/goal-item.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { ListTabsComponent } from './goals-list/list-tabs/list-tabs.component';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { GoalEditContentComponent } from './goal-edit-content/goal-edit-content.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    GoalsRoutingModule
  ],
  declarations: [
    GoalsListComponent,
    GoalContentComponent,
    GoalsComponent,
    GoalItemComponent,
    ListTabsComponent,
    GoalEditContentComponent
  ],
})
export class GoalsModule {
}
