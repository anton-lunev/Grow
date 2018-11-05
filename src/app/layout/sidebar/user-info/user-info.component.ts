import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from '../../../auth/state/auth.model';

@Component({
  selector: 'grow-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnChanges {
  @Input() isLoading: boolean;
  @Input() user: User;
  @Output() signIn = new EventEmitter();

  authorized: boolean;
  userIsLoading: boolean;
  unauthorized: boolean;

  ngOnChanges() {
    this.resetState();
    if (this.user) {
      // User authorized and user data was found in localStorage.
      this.authorized = true;
    } else if (this.isLoading) {
      // User data wasn't found in localStorage, so we don't know if he authorized on not, so we show loader.
      this.userIsLoading = true;
    } else {
      // User unauthorized.
      this.unauthorized = true;
    }
  }

  private resetState() {
    this.authorized = false;
    this.userIsLoading = false;
    this.unauthorized = false;
  }

  auth() {
    this.signIn.emit();
  }
}
