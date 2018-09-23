import { createFeatureSelector, createSelector } from '@ngrx/store';
import { goalsAdapter, GoalsFeatureState } from './goals.state';

export const GoalsFeatureName = 'GoalsModule';

export const getGoalsState = createFeatureSelector<GoalsFeatureState>(GoalsFeatureName);

export const getGoalEntitiesState = createSelector(getGoalsState, (state: GoalsFeatureState) => state.goals);
// export const getTasksError = createSelector(getGoalsState, (state: GoalsState) => state.error);
// export const getTasksLoaded = createSelector(getGoalsState, (state: GoalsState) => state.loaded);


export const {
  // selectEntities: getGoalsEntities,
  selectAll: getAllGoals
} = goalsAdapter.getSelectors(getGoalEntitiesState);


