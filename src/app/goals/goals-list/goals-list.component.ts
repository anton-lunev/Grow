import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { switchMap, distinctUntilChanged } from 'rxjs/operators';

import { Goal } from '../state/goal/goal.model';
import { GoalsQuery } from '../state/goal/goals.query';
import { GoalsService } from '../state/goal/goals.service';

@Component({
  selector: 'grow-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit, OnDestroy {
  goals: Goal[];
  loading$: Observable<boolean>;
  newGoalsSub: Subscription;
  goalsSub: Subscription;
  filter = new FormControl('');

  selectedGoal: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private goalsService: GoalsService,
    private goalsQuery: GoalsQuery
  ) {}

  ngOnInit() {
    this.goalsService.getGoals();
    this.loading$ = this.goalsQuery.selectLoading();
    this.newGoalsSub = this.goalsService.getNewGoal().subscribe(goal => this.navigateToSelectedGoal(goal.id));

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedGoal();
        this.selectTheFirstGoal();
      }
    });
    this.updateSelectedGoal();

    this.goalsSub = this.goalsQuery.selectAll().subscribe(goals => {
      this.goals = goals;
      this.selectTheFirstGoal();
    });
    this.getFilteredGoals();
  }

  getFilteredGoals() {
    this.filter.valueChanges
      .pipe(
        distinctUntilChanged(),
        switchMap(value =>
          this.goalsQuery.selectAll({
            filterBy: (goal: Goal) =>
              [goal.description, goal.title].some((field: String) => field.toLowerCase().includes(value))
          })
        )
      )
      .subscribe(goals => (this.goals = goals));
  }

  selectTheFirstGoal() {
    if (!this.selectedGoal && this.goals && this.goals.length) {
      this.navigateToSelectedGoal(this.goals[0].id);
    }
  }

  navigateToSelectedGoal(goalId) {
    this.router.navigate(['/goals', goalId]);
  }

  updateSelectedGoal() {
    this.selectedGoal = this.route.firstChild ? this.route.firstChild.snapshot.params.goalId : null;
  }

  isGoalSelected(goalId: string): boolean {
    return this.selectedGoal === goalId;
  }

  addGoal(goalTitle) {
    this.goalsService.addGoal(goalTitle);
  }

  ngOnDestroy() {
    this.newGoalsSub.unsubscribe();
    this.goalsSub.unsubscribe();
  }

  trackByData(goal: Goal) {
    return goal.title + goal.description + goal.image;
  }
}
