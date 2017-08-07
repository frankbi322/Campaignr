import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; //return false if payload is empty string when logged out
    default:
      return state;
  }
}
