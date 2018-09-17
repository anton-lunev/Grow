import { createFeatureSelector, createSelector } from '@ngrx/store';
import { goalsAdapter, GoalsState } from './goals.state';

export const getGoalsState = createFeatureSelector<GoalsState>('goals');

export const getGoalsData = createSelector(getGoalsState, (state: GoalsState) => state.entities);
export const getTasksError = createSelector(getGoalsState, (state: GoalsState) => state.error);
export const getTasksLoaded = createSelector(getGoalsState, (state: GoalsState) => state.loaded);

//
// export const {
//   selectEntities: getGoalsEntities,
//   selectAll: getGoalsData
// } = goalsAdapter.getSelectors(getGoalsState);


