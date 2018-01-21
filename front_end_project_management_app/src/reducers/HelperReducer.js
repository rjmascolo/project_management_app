export function revisionItemsReducer(state,action) {
  switch(action.type) {

    case "ADD_REVISION_ITEM":
      return [...state, action.item];
    case "DELETE_REVISION_ITEM":
      return state.filter(item => item.id !== action.item.id);
  }
}

export function commentsReducer(state,action) {
  switch(action.type) {

    case "ADD_COMMENT":
      return [...state, action.comment];
    case "DELETE_COMMENT":
      return state.filter(comment => comment.id !== action.comment.id);
  }
}

export function deliverablesReducer(state, action) {
  switch(action.type) {

    case 'UPDATE_DELIVERABLE':
      const newDeliverables = state.map(deliverable => {
        return deliverable.id === action.deliverable.id ? action.deliverable : deliverable
      })
      return newDeliverables;

  }
}

export function usersReducer(state, action) {
  switch(action.type) {

    case 'UPDATE_PROJECT_USERS':
      return action.users;

    default:
      return state
  }
}

export function companiesReducer(state = [], action) {
  switch( action.type ) {
    case "FETCH_USER":
      return action.company

    default:
      return state;
  }
}

export function campaignsReducer (state = [], action) {
  switch( action.type ) {
    case "FETCH_USER":
      return action.campaigns

    default:
      return state;
  }
}

export function notificationsReducer (state = [], action) {
  switch( action.type ) {
    case "ADD_REVISION":
      return [...state, action.revision.notification]

    default:
      return state;
  }
}
