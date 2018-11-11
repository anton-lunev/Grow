import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Goal } from '../state/goal.model';
import { GoalsQuery } from '../state/goals.query';
import { GoalsService } from '../state/goals.service';

@Component({
  selector: 'grow-goal-content',
  templateUrl: './goal-content.component.html',
  styleUrls: ['./goal-content.component.scss']
})
export class GoalContentComponent implements OnInit {
  /*goal = {
    title: 'Finish MVP of this app',
    description: `A minimum viable product has just those core features sufficient to deploy the product, and no more.
      Developers typically deploy the product to a subset of possible customers—such as early adopters thought to be more forgiving,
      more likely to give feedback, and able to grasp a product vision from an early prototype or marketing information.
      This strategy targets avoiding building products that customers do not want and seeks to maximize information about the customer
      per amount of money spent. "The minimum viable product is that version of a new product a team uses to collect the maximum amount
      of validated learning about customers with the least effort."`,
    image: '',
    tasks: [
      { title: 'Finish markup of main pages', done: false },
      { title: 'Add authentication', done: false },
      { title: 'Setup routing', done: false },
      { title: 'Setup ngrx', done: false },
      { title: 'Setup firebase', done: false }
    ]
  };*/
  goal: Goal;

  constructor(private goalsService: GoalsService, private goalsQuery: GoalsQuery, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => this.goalsQuery.selectEntity(params.goalId)))
      .subscribe(goal => (this.goal = goal));
  }
}
