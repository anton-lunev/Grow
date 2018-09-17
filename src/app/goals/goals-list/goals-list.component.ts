import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../core/+store/app.state';
import { Goal } from '../../core/+store/goals/goal.model';
import * as GoalsActions from '../../core/+store/goals/goals.actions';
import { getGoalsData } from '../../core/+store/goals/goals.selectors';

@Component({
  selector: 'grow-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {
  /*goals = [
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
  ];*/
  goals$: Observable<Goal[]>;

  selectedGoal: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.goals$ = this.store.pipe(select(getGoalsData));
    this.store.dispatch(new GoalsActions.GetGoals());

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedGoal();
      }
    });
    this.updateSelectedGoal();
  }

  updateSelectedGoal() {
    this.selectedGoal = this.route.firstChild ? +this.route.firstChild.snapshot.params.goalId : null;
  }

  isGoalSelected(goalId: number): boolean {
    return this.selectedGoal === goalId;
  }
}
