import { Action } from '@ngrx/store';
import { Goal } from './goal.model';

// [Goals]- namespace
export enum GoalsActionTypes {
  GET_GOALS = '[Goals] GET_GOALS',
  GET_GOALS_SUCCESS = '[Goals] GET_GOALS_SUCCESS',
  GET_GOALS_ERROR = '[Goals] GET_GOALS_ERROR',
}

export class GetGoals implements Action {
  readonly type = GoalsActionTypes.GET_GOALS;
}

export class GetGoalsSuccess implements Action {
  readonly type = GoalsActionTypes.GET_GOALS_SUCCESS;

  constructor(public payload: Goal[]) {}
}

export class GetGoalsError implements Action {
  readonly type = GoalsActionTypes.GET_GOALS_ERROR;

  constructor(public payload: Error | string) {}
}


export type GoalsActions =
  | GetGoals
  | GetGoalsSuccess
  | GetGoalsError;
