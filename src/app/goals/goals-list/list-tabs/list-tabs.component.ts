import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'grow-list-tabs',
  templateUrl: './list-tabs.component.html',
  styleUrls: ['./list-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
