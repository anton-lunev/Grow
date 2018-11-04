import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../../../auth/state/auth.model';

@Component({
  selector: 'grow-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() user: User;

  constructor() {}

  ngOnInit() {}

}
