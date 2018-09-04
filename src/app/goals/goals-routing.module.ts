import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalContentComponent } from './goal-content/goal-content.component';
import { GoalEditContentComponent } from './goal-edit-content/goal-edit-content.component';
import { GoalsComponent } from './goals.component';

const routes: Routes = [
  {
    path: 'goals', component: GoalsComponent,
    children: [
      {path: 'add', component: GoalEditContentComponent},
      {path: ':goalId', component: GoalContentComponent},
      {path: ':goalId/edit', component: GoalEditContentComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule {
}
