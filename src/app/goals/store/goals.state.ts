import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { AppState } from '../../core/+store/app.state';
import { Goal } from '../models/goal.model';

export interface GoalsFeatureState extends AppState {
  goals: GoalsState;
}

export interface GoalsState extends EntityState<Goal> {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const goalsAdapter: EntityAdapter<Goal> = createEntityAdapter<Goal>();

export const initialGoalsState: GoalsState = goalsAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: null,
});
