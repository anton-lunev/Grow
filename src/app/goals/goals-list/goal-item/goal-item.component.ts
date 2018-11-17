import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Goal } from '../../state/goal/goal.model';

@Component({
  selector: 'grow-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalItemComponent implements OnInit {
  @Input() goal: Goal;
  @Input() selected: boolean;

  constructor() {}

  ngOnInit() {}
}
