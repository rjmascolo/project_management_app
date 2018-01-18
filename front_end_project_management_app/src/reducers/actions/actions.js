import fetch from 'isomorphic-fetch';

const token = localStorage.getItem('token')

const API_URL = "http://localhost:3000/"

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: token
}

export function fetchUser(id) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_USERS_REQUEST' });
    return fetch(`${API_URL}users/${id}`)
      .then(response => response.json())
      .then(user => {
        if (user.status === 404 ) {
          return user
        } else {
        const newUser = Object.assign({id: user.id, first_name: user.first_name, last_name: user.last_name, position: user.position})
        const projects = user.projects;
        return dispatch({ type: 'FETCH_USER', user: newUser, projects: projects })
        }
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
  return fetch(`${API_URL}auth`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({username, password }
    )
  }).then(res => res.json())
}

export const getCurrentUser = () => {
  return fetch(`${API_URL}current_user/`, {
    headers: headers } ).then(res => res.json())
}

export const createRevisionAsset = (item, projectId) => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_REVISION_ITEM' });
    return fetch(`${API_URL}revision_items/`, {
      method:'POST',
      body: item
    })
      .then(response => response.json())
      .then(json => {
        const itemNew = Object.assign( json, {project_id: projectId});
        dispatch({ type: 'ADD_REVISION_ITEM', item: itemNew } );
      }
    );
  };
}

export const createRevision = (item) => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_REVISION' });
    return fetch(`${API_URL}revisions/`, {
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

export const createComment = (comment, projectId) => {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_COMMENTS' });
    return fetch(`${API_URL}comments/`, {
      method:'POST',
      headers: headers,
      body:JSON.stringify(comment)
    })
      .then(response => response.json())
      .then(commentRails => {
        const comment = Object.assign( commentRails, { project_id: parseInt(projectId) })
        dispatch({ type: 'ADD_COMMENT', comment } );
      }
    );
  };
}

export const deleteComment = (commentId, revisionId, projectId) => {
  return (dispatch) => {
    dispatch({ type: 'START_DELETEING_COMMENTS' });
    return fetch(`${API_URL}comments/${commentId}`, {
      method:'DELETE',
      headers: headers,
      // body:JSON.stringify(commentId)
    })
      .then(response => response.json())
      .then(commentRails => {
        const comment = {id: parseInt(commentId), revision_id: parseInt(revisionId), project_id: parseInt(projectId) }
        dispatch({ type: 'DELETE_COMMENT', comment } );
      }
    );
  };
}

export const createNewProject = (projectHash) => {

  // let project = {
  //   name: projectHash.projectName,
  //   project_type: projectHash.projectType,
  //   description: projectHash.projectDescription,
  //   image: projectHash.projectImage,
  // }

  let projectData = {project: projectHash}
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_PROJECTS' });
    return fetch(`${API_URL}projects/`, {
      method:'POST',
      headers: headers,
      body:JSON.stringify(projectData)
    })
      .then(response => response.json())
      .then(project => {
        project.revisions[0]["revision_items"] = []
        project.revisions[0]["comments"] = []
        dispatch({ type: 'ADD_PROJECT', project } );
        return project
        // createRevision({description: projectHash.creativeDeliverables, revision_type:"creative brief"})
        // projectHash.projectUsers.forEach( user => createUserProject(user,project.id))
      }
    );
  };
}

export const deleteFile = ( itemId, projectId ) => {
  return (dispatch) => {
    dispatch({ type: 'START_DELETEING_COMMENTS' });
    return fetch(`${API_URL}revision_items/${itemId}`, {
      method:'DELETE',
      headers: headers,
      // body:JSON.stringify(commentId)
    })
      .then(response => response.json())
      .then(freshItem => {
        let item = Object.assign( freshItem , {project_id: parseInt(projectId)} )
        dispatch({ type: 'DELETE_REVISION_ITEM', item } );
      }
    );
  };
}

export const updateDeliverable = (deliverable, projectId) => {
  return (dispatch) => {
    dispatch({ type: 'START_UPDATING_DELIVERABLE' });
    return fetch(`${API_URL}deliverables/${deliverable.id}`, {
      method:'PATCH',
      headers: headers,
      body:JSON.stringify({done: deliverable.done})
    })
      .then(response => response.json())
      .then(deliverableRails => {
        const deliverable = Object.assign( deliverableRails , {project_id: parseInt(projectId)} )
        dispatch({ type: 'UPDATE_DELIVERABLE' , deliverable } );
      }
    );
  };
}
