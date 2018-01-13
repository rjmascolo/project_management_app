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
      .then(user => {
        const newUser = Object.assign({id: user.id, first_name: user.first_name, last_name: user.last_name, position: user.position})
        const projects = user.projects;
         return dispatch({ type: 'FETCH_USER', user: newUser, projects: projects })
       }
    );
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

export const createRevisionAsset = (item, projectId) => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_REVISION_ITEM' });
    return fetch(`http://localhost:3000/revision_items/`, {
      method:'POST',
      headers: headers,
      body:JSON.stringify(item)
    })
      .then(response => response.json())
      .then(json => {
        const itemNew = Object.assign( json, {project_id: projectId, revision_id: item.revision_id});
        dispatch({ type: 'ADD_REVISION_ITEM', item: itemNew } );
      }
    );
  };
}

export const createRevision = (item) => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_REVISION' });
    return fetch(`http://localhost:3000/revisions/`, {
      method:'POST',
      headers: headers,
      body:JSON.stringify(item)
    })
      .then(response => response.json())
      .then(revision => {
        dispatch({ type: 'ADD_REVISION', revision } );
      }
    );
  };
}

export const createComment = (comment) => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_REVISION' });
    return fetch(`http://localhost:3000/revisions/`, {
      method:'POST',
      headers: headers,
      body:JSON.stringify(comment)
    })
      .then(response => response.json())
      .then(comment => {
        dispatch({ type: 'ADD_COMMENT', comment } );
      }
    );
  };
}
