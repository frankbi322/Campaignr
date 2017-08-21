import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';
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

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({
    //return updated user because user should have fewer credits
    type: FETCH_USER,
    payload: res.data
  });
};

export const fetchSurveys = () => {
  async dispatch => {
    const res = await axios.get('/api/surveys');
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  };
};
