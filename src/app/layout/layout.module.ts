import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TaskListComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
