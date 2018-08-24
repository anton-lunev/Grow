import { Component, OnInit } from '@angular/core';

// TODO rename it to GoalsListComponent
@Component({
  selector: 'grow-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
