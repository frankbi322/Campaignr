import { FETCH_SURVEYS, DELETE_SURVEY } from '../actions/types';
import merge from 'lodash/merge';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    case DELETE_SURVEY:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}
