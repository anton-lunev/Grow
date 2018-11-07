import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grow-side-statistics',
  templateUrl: './side-statistics.component.html',
  styleUrls: ['./side-statistics.component.scss']
})
export class SideStatisticsComponent implements OnInit {
  @Input() statistics: { name: string; entity: string; quantity: number };

  constructor() {}

  ngOnInit() {}
}
