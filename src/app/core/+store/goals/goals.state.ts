import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Goal } from './goal.model';

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
