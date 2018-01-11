import fetch from 'isomorphic-fetch';

const token = localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: token
}

export function fetchUser(id) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_USERS_REQUEST' });
    return fetch(`http://localhost:3000/users/${id}`)
      .then(response => response.json())
      .then(user => dispatch({ type: 'FETCH_USER', user }));
  };
}

export function logOut() {
  localStorage.removeItem('token')
  return(dispatch)=> {
    dispatch({type:"LOGOUT_USER"})
  }
}

export const login = (username, password) => {
  return fetch("http://localhost:3000/auth", {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({username, password }
    )
  }).then(res => res.json())
}

export const getCurrentUser = () => {
  return fetch("http://localhost:3000/current_user/", {
    headers: headers } ).then(res => res.json())
}
