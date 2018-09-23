import { GoalsActions, GoalsActionTypes } from './goals.actions';
import { goalsAdapter, GoalsState, initialGoalsState } from './goals.state';

export function goalsReducer(state = initialGoalsState, action: GoalsActions): GoalsState {
  switch (action.type) {
    case GoalsActionTypes.GET_GOALS: {
      return {...state, loading: true};
    }

    case GoalsActionTypes.GET_GOALS_SUCCESS: {
      return goalsAdapter.addMany(action.payload, {...state, loading: false, loaded: true});
    }

    case GoalsActionTypes.GET_GOALS_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
