import axios from 'axios';
import { FETCH_USER, CREATE_SURVEY } from './types';
// refactored below
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(response => dispatch({ type: FETCH_USER, payload: response }));
//   };
// };

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

//handleToken takes a token and makes a post request to the stripe API with the token, returning an updated user model, which triggers a rerender
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({
    type: FETCH_USER,
    payload: res.data //updated user model
  });
};

export const createSurvey = survey => async dispatch => {
  const res = await axios.post('/api/surveys');
  dispatch({
    type: CREATE_SURVEY,
    payload: res.data
  });
};
