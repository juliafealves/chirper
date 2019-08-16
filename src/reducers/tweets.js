import { ADD_TWEET, RECEIVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";

function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    case TOGGLE_TWEET:
      const tweet = state[action.id];
      return {
        ...state,
        [action.id]: {
          ...tweet,
          likes:
            action.hasLiked === true
              ? tweet.likes.filter(userId => userId !== action.authedUser)
              : tweet.likes.concat([action.authedUser])
        }
      };
    case ADD_TWEET:
      const { newTweet } = action;
      const { id, replyingTo } = newTweet;
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
        [id]: newTweet,
        ...replying
      };

    default:
      return state;
  }
}

export default tweets;
