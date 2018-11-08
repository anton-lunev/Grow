import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'grow-goal-item-shimmer',
  templateUrl: './goal-item-shimmer.component.html',
  styleUrls: ['./goal-item-shimmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalItemShimmerComponent {}
