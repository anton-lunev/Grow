import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grow-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {
  goals = [
    {
      title: 'Listen book "Talk to crazy"',
      description: 'Great book that makes some suggestions how to talk with psychopaths',
      image: ''
    },
    {
      title: 'Finish MVP of this app',
      description: 'Minimal viable product is a product with just enough features to satisfy early customers',
      image: ''
    },
    {
      title: 'Learn Ngrx',
      description: 'Watch Angular Ngrx course and apply knowledge to this app',
      image: ''
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
