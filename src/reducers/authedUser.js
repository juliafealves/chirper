import { SET_AUTHED_USER } from "../actions/authedUser";

function authedUser(state = null, action) {
  if (action.type === SET_AUTHED_USER) {
    return action.id;
  }

  return state;
}

export default authedUser;
