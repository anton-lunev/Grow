import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoalContentComponent} from './goal-content/goal-content.component';
import {GoalsComponent} from './goals.component';

const routes: Routes = [
  {
    path: 'goals', component: GoalsComponent,
    children: [
      {path: ':id', component: GoalContentComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule {
}
