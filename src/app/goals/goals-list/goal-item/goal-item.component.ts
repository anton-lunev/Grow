import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() delete = new EventEmitter<String>();
  @Output() switchDone = new EventEmitter<Goal>();

  constructor() {}

  ngOnInit() {}
}
