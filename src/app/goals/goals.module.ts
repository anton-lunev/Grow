import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoalContentComponent} from './goal-content/goal-content.component';
import {GoalsListComponent} from './goals-list/goals-list.component';
import {GoalsRoutingModule} from './goals-routing.module';
import {GoalsComponent} from './goals.component';

@NgModule({
  imports: [
    CommonModule,
    GoalsRoutingModule
  ],
  declarations: [
    GoalsListComponent,
    GoalContentComponent,
    GoalsComponent
  ],
})
export class GoalsModule {
}
