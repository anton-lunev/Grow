import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grow-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalItemComponent implements OnInit {
  @Input() goal: { id: number, title: string, description: string, image: string };
  @Input() selected: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
