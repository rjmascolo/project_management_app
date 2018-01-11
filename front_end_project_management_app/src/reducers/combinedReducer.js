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

    default:
      return state;
  }
}
