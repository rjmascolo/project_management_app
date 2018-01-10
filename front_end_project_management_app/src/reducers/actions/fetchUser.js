import fetch from 'isomorphic-fetch';

export function fetchUser() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_USERS_REQUEST' });
    return fetch('http://localhost:3000/users/1')
      .then(response => response.json())
      .then(user => dispatch({ type: 'FETCH_USER', user }));
  };
}
