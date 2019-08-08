import { RECEIVE_TWEETS } from "../actions/tweets";

function tweets(state = {}, action) {
  if (action.type === RECEIVE_TWEETS) {
    return {
      ...state,
      ...action.tweets
    };
  }

  return state;
}

export default tweets;
