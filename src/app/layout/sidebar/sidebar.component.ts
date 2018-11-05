import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../auth/state/auth.model';
import { AuthQuery } from '../../auth/state/auth.query';
import { AuthService } from '../../auth/state/auth.service';

@Component({
  selector: 'grow-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isUserLoadingSub: Subscription;
  currentUserSub: Subscription;
  isUserLoading: boolean;
  currentUser: User = this.authQuery.getCurrentUser();

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

  constructor(private authQuery: AuthQuery, private authService: AuthService) {}

  ngOnInit() {
    this.isUserLoadingSub = this.authQuery.selectLoading().subscribe(isUserLoading => {
      this.isUserLoading = isUserLoading;
      console.log(isUserLoading);
    });
    this.currentUserSub = this.authQuery.currentUser$.subscribe(user => this.currentUser = user);
  }

  ngOnDestroy() {
    this.isUserLoadingSub.unsubscribe();
    this.currentUserSub.unsubscribe();
  }

  signIn() {
    this.authService.googleLogin();
  }
}
