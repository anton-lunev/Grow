import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Goal } from './goal.model';
import * as GoalsActions from './goals.actions';


@Injectable()
export class GoalsEffects {
  private static goalsMock = [
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
  @Effect()
  getGoals$: Observable<Action> = this.actions$.pipe(
    ofType(GoalsActions.GoalsActionTypes.GET_GOALS),
    switchMap(() =>
      of(GoalsEffects.goalsMock).pipe(
        map((goals: Goal[]) => new GoalsActions.GetGoalsSuccess(goals)),
        catchError(error => of(new GoalsActions.GetGoalsError(error)))
      )
    )
  );

  constructor(private actions$: Actions) {}
}
