import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Goal } from '../state/goal.model';
import { GoalsQuery } from '../state/goals.query';
import { GoalsService } from '../state/goals.service';

@Component({
  selector: 'grow-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {
  goals$: Observable<Goal[]>;
  loading$: Observable<any>;

  selectedGoal: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private goalsService: GoalsService,
              private goalsQuery: GoalsQuery) {}

  ngOnInit() {
    this.goalsService.getGoals();
    this.goals$ = this.goalsQuery.selectAll();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedGoal();
      }
    });
    this.updateSelectedGoal();
    this.showLoadingState();
  }

  updateSelectedGoal() {
    this.selectedGoal = this.route.firstChild ? this.route.firstChild.snapshot.params.goalId : null;
  }

  isGoalSelected(goalId: string): boolean {
    return this.selectedGoal === goalId;
  }

  showLoadingState() {
    this.loading$ = this.goalsQuery.selectLoading();
    this.loading$.subscribe(data => {
      console.log(data);
    });
  }
}
