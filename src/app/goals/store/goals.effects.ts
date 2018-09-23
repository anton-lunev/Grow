import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { mapCollectionIds } from '../../shared/helpers/map-collection-ids';
import { Goal } from '../models/goal.model';
import * as GoalsActions from './goals.actions';


@Injectable()
export class GoalsEffects {
  constructor(private actions$: Actions, private db: AngularFirestore) {}

  @Effect()
  getGoals$: Observable<Action> = this.actions$.pipe(
    ofType(GoalsActions.GoalsActionTypes.GET_GOALS),
    switchMap(() =>
      this.db.collection('goals').snapshotChanges().pipe(
        map(mapCollectionIds),
        map((goals: Goal[]) => new GoalsActions.GetGoalsSuccess(goals)),
        catchError(error => of(new GoalsActions.GetGoalsError(error)))
      )
    )
  );
}
