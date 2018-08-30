import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SideStatisticsComponent } from './side-statistics/side-statistics.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SidebarComponent, SideNavComponent, UserInfoComponent, SideStatisticsComponent],
  exports: [SidebarComponent]
})
export class LayoutModule {
}
