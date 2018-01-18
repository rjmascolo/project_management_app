import { combineReducers } from 'redux';
import { revisionItemsReducer, commentsReducer, deliverablesReducer } from './HelperReducer.js'


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

     case "FETCH_USER":
      return true;

    default:
      return state;
  }
}

function projectsReducer(state = [], action) {
  switch (action.type) {

    case "ADD_PROJECT":
      return [ ... state, action.project];

    case "REMOVE_PROJECT":
      return state;

    case "FETCH_USER":
      return action.projects

    case "ADD_REVISION":
    case "ADD_REVISION_ITEM":
    case "DELETE_REVISION_ITEM":
    case "ADD_COMMENT":
    case "DELETE_COMMENT":
    case 'UPDATE_DELIVERABLE':
      let projectIndex;
      let newRevisions;
      let newDeliverables;
      if (action.revision){
        projectIndex = state.findIndex(project => project.id === action.revision.project_id);
        newRevisions = revisionsReducer(state[projectIndex].revisions, action);
      } else if (action.item) {
        projectIndex = state.findIndex(project => project.id === action.item.project_id);
        newRevisions = revisionsReducer(state[projectIndex].revisions, action);
      } else if (action.comment){
        projectIndex = state.findIndex(project => project.id === action.comment.project_id);
        newRevisions = revisionsReducer(state[projectIndex].revisions, action);
      } else if (action.deliverable){
        projectIndex = state.findIndex(project => project.id === action.deliverable.project_id);
        newDeliverables = deliverablesReducer(state[projectIndex].deliverables, action);
        return [
            ...state.slice(0, projectIndex),
            { ...state[projectIndex], deliverables: newDeliverables },
            ...state.slice(projectIndex + 1)
          ]
      }
      return [
          ...state.slice(0, projectIndex),
          { ...state[projectIndex], revisions: newRevisions },
          ...state.slice(projectIndex + 1)
        ]

    default:
      return state;
  }
}

function revisionsReducer(state, action) {

  switch (action.type) {

  case "ADD_REVISION":
    return [...state, action.revision]

  case "ADD_REVISION_ITEM":
  case "DELETE_REVISION_ITEM":
  case "ADD_COMMENT":
  case "DELETE_COMMENT":
    let revisionIndex;
    let newRevisionItems;
    if (action.item){
      revisionIndex = state.findIndex(revision => revision.id === action.item.revision_id);
      newRevisionItems = revisionItemsReducer(state[revisionIndex].revision_items, action);
      return [
          ...state.slice(0, revisionIndex),
          { ...state[revisionIndex], revision_items: newRevisionItems },
          ...state.slice(revisionIndex + 1)
        ]
    } else if (action.comment) {
      revisionIndex = state.findIndex(revision => revision.id === action.comment.revision_id);
      newRevisionItems = commentsReducer(state[revisionIndex].comments, action);
      return [
          ...state.slice(0, revisionIndex),
          { ...state[revisionIndex], comments: newRevisionItems },
          ...state.slice(revisionIndex + 1)
        ]
    }
  }
}
