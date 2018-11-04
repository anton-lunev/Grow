import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../auth/state/auth.model';
import { AuthQuery } from '../../auth/state/auth.query';

@Component({
  selector: 'grow-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isUserLoading$: Observable<boolean>;
  currentUser$: Observable<User>;

  // statistics = [
  //   {
  //     name: 'Completed',
  //     entity: 'tasks',
  //     quantity: 12
  //   },
  //   {
  //     name: 'To do',
  //     entity: 'tasks',
  //     quantity: 22
  //   },
  //   {
  //     name: 'All',
  //     entity: 'completed',
  //     quantity: 243
  //   }
  // ];

  constructor(private authQuery: AuthQuery) {}

  ngOnInit() {
    this.isUserLoading$ = this.authQuery.selectLoading();
    this.currentUser$ = this.authQuery.currentUser$;
  }
}
