import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import { SideNavComponent } from './sidebar/side-nav/side-nav.component';
import { UserInfoComponent } from './sidebar/user-info/user-info.component';
import { SideStatisticsComponent } from './sidebar/side-statistics/side-statistics.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SidebarComponent, SideNavComponent, UserInfoComponent, SideStatisticsComponent],
  exports: [SidebarComponent]
})
export class LayoutModule {
}
