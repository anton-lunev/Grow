import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { GoalsComponent } from './goals.component';

const routes: Routes = [
  {
    path: '',
    component: GoalsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':goalId',
        loadChildren: './goal-details/goal-details.module#GoalDetailsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule {}
