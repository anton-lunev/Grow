import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/goals', pathMatch: 'full' },
  {
    path: 'goals',
    loadChildren: './goals/goals.module#GoalsModule'
  }
  // { path: '**', redirectTo: '/goals', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
