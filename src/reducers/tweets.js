import { ADD_TWEET, RECEIVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";

function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    case TOGGLE_TWEET:
      const currentTweet = state[action.id];
      return {
        ...state,
        [action.id]: {
          ...currentTweet,
          likes:
            action.hasLiked === true
              ? currentTweet.likes.filter(
                  userId => userId !== action.authedUser
                )
              : currentTweet.likes.concat([action.authedUser])
        }
      };
    case ADD_TWEET:
      const { tweet } = action;
      const { id, replyingTo } = tweet;
      let replyingTweet = {};

      if (replyingTo !== null) {
        replyingTweet = {
          [replyingTo]: {
            ...state[replyingTo],
            replies: state[replyingTo].replies.concat([id])
          }
        };
      }

      return {
        ...state,
        [id]: tweet,
        ...replyingTweet
      };

    default:
      return state;
  }
}

export default tweets;
