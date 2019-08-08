import { RECEIVE_USERS } from "../actions/users";

function users(state = {}, action) {
  if (action.type === RECEIVE_USERS) {
    return {
      ...state,
      ...action.users
    };
  }

  return state;
}

export default users;
