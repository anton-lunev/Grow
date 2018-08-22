import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
