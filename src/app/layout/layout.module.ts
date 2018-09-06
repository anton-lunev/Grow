import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './sidebar/side-nav/side-nav.component';
import { SideStatisticsComponent } from './sidebar/side-statistics/side-statistics.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserInfoComponent } from './sidebar/user-info/user-info.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SidebarComponent, SideNavComponent, UserInfoComponent, SideStatisticsComponent],
  exports: [SidebarComponent]
})
export class LayoutModule {
}
