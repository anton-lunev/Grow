import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../core/+store/app.state';
import { Goal } from '../models/goal.model';
import * as GoalsActions from '../store/goals.actions';
import { getAllGoals } from '../store/goals.selectors';

@Component({
  selector: 'grow-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {
  goals$: Observable<Goal[]>;

  selectedGoal: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<AppState>) {}

  ngOnInit() {
    this.goals$ = this.store.pipe(select(getAllGoals));
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
