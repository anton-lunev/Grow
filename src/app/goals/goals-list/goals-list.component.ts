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
  }

  updateSelectedGoal() {
    this.selectedGoal = this.route.firstChild ? this.route.firstChild.snapshot.params.goalId : null;
  }

  isGoalSelected(goalId: string): boolean {
    return this.selectedGoal === goalId;
  }
}
