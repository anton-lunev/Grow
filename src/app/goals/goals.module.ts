import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoalContentComponent } from './goal-content/goal-content.component';
import { GoalItemComponent } from './goals-list/goal-item/goal-item.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { ListTabsComponent } from './goals-list/list-tabs/list-tabs.component';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';

@NgModule({
  imports: [
    CommonModule,
    GoalsRoutingModule
  ],
  declarations: [
    GoalsListComponent,
    GoalContentComponent,
    GoalsComponent,
    GoalItemComponent,
    ListTabsComponent
  ],
})
export class GoalsModule {
}
