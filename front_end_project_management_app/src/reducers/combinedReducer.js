import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer
});

function userReducer(state = [], action) {
  switch (action.type) {

     case "FETCH_USER":
      return action.user;

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
