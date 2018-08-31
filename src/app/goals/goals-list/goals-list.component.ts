import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'grow-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {
  goals = [
    {
      id: 0,
      title: 'Listen book "Talk to crazy"',
      description: 'Great book that makes some suggestions how to talk with psychopaths',
      image: ''
    },
    {
      id: 1,
      title: 'Finish MVP of this app',
      description: 'Minimal viable product is a product with just enough features to satisfy early customers',
      image: ''
    },
    {
      id: 2,
      title: 'Learn Ngrx',
      description: 'Watch Angular Ngrx course and apply knowledge to this app',
      image: ''
    }
  ];

  selectedGoal: number;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.firstChild.paramMap.subscribe(params => this.selectedGoal = +params.get('goalId'));
  }

  isGoalSelected(goalId: number): boolean {
    return this.selectedGoal === goalId;
  }
}
