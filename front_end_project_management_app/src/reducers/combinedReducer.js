import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
  loggedin: loggedinReducer,
  user: userReducer,
  projects: projectsReducer
});

function userReducer(state = false, action) {
  switch (action.type) {

    case "FETCH_USER":
      return action.user;

    case  "LOGOUT_USER":
      return false

    default:
      return state;
  }
}

function loggedinReducer(state = false, action) {
  switch (action.type) {

     case "USER_LOGGED_IN":
      return true;

    default:
      return state;
  }
}

function projectsReducer(state = [], action) {
  switch (action.type) {

    case "ADD_PROJECT":
      return state;

    case "REMOVE_PROJECT":
      return state;

    case "FETCH_USER":
      return action.projects

    case "ADD_REVISION_ITEM":
      let withRevisionItem = state.map(project => {
        if (project.id === action.item.project_id) {
          project.revisions.map( revision => {
            if(revision.id === action.item.revision_id) {
              revision.revision_items.push(Object.assign({id: action.item.id}, {item_type: action.item.item_type} , {file: action.item.file} ))
              return revision
            } else {
              return revision
            }
          })
          return project
        } else {
          return project
        }
      })
      return withRevisionItem
    case "ADD_REVISION":
      const addRevisionToProject = state.map( project => {
        if (project.id === action.revision.project_id) {
          project.revisions.push(action.revision)
          return project
        } else {
          return project
        }
      })
      return addRevisionToProject

    default:
      return state;
  }
}
