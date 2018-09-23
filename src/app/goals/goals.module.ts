import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { GoalContentComponent } from './goal-content/goal-content.component';
import { GoalEditContentComponent } from './goal-edit-content/goal-edit-content.component';
import { GoalItemComponent } from './goals-list/goal-item/goal-item.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { ListTabsComponent } from './goals-list/list-tabs/list-tabs.component';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { GoalsEffects } from './store/goals.effects';
import { goalsReducer } from './store/goals.reducer';
import { GoalsFeatureName } from './store/goals.selectors';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    GoalsRoutingModule,
    EffectsModule.forFeature([GoalsEffects]),
    StoreModule.forFeature(GoalsFeatureName, {goals: goalsReducer}),
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
