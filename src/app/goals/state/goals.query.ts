import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Goal } from './goal.model';
import { GoalsState, GoalsStore } from './goals.store';

@Injectable({providedIn: 'root'})
export class GoalsQuery extends QueryEntity<GoalsState, Goal> {
  constructor(protected store: GoalsStore) {
    super(store);
  }
}
