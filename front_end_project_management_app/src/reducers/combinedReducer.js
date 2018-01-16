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

    case "ADD_REVISION_ITEM":
      let withRevisionItem = state.map(project => {
        if (project.id === action.item.project_id) {
          project.revisions.map( revision => {
            if(revision.id === action.item.revision_id) {
              revision.revision_items.push(Object.assign({id: action.item.id}, {item_type: action.item.item_type} , {file_url: action.item.file_url}, {file_name: action.item.file_name} ))
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
    case "ADD_COMMENT":
      const addNewComment = state.map( project => {
        if (project.id === parseInt(action.commentNew.project_id)) {
          project.revisions.map(revision => {
            if(revision.id === parseInt(action.commentNew.revision_id)){
              revision.comments.push(
                {
                  id: action.commentNew.id ,
                  content: action.commentNew.content ,
                  user_id: action.commentNew.user_id,
                  revision_id: action.commentNew.revision_id
                })
              return revision
            }else {
              return revision
            }
          })
          return project
        } else {
          return project
        }
      })
      return addNewComment

    case "DELETE_COMMENT":
    const deleteComment = state.map( project => {
      if (project.id === parseInt(action.deletedComment.projectId)) {
        project.revisions.map(revision => {
          if(revision.id === parseInt(action.deletedComment.revisionId)){
            revision.comments = revision.comments.filter(comment => comment.id !== action.deletedComment.commentId)
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
      return deleteComment;

    default:
      return state;
  }
}
