import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { GoalContentComponent } from './goal-content/goal-content.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    GoalsListComponent,
    GoalContentComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
