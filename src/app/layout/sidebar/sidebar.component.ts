import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grow-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  statistics = [
    {
      name: 'Completed',
      entity: 'tasks',
      quantity: 12
    },
    {
      name: 'To do',
      entity: 'tasks',
      quantity: 22
    },
    {
      name: 'All',
      entity: 'completed',
      quantity: 243
    }
  ];

  constructor() {}

  ngOnInit() {}

}
