import React, { Component } from "react";
import { connect } from "react-redux";
import TiArrowBackOutline from "react-icons/lib/ti/arrow-back-outline";
import TiHeartOutline from "react-icons/lib/ti/heart-outline";
import TiHeartFullOutline from "react-icons/lib/ti/heart-full-outline";
import { formatTweet, formatDate } from "../utils/helpers";

class Tweet extends Component {
  handleLike = event => {
    event.preventDefault();
  };

  toParent = (event, id) => {
    event.preventDefault();
  };

  render() {
    const { tweet } = this.props;

    if (!tweet) {
      return <p>This Tweet doesn't existed.</p>;
    }

    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      parent
    } = tweet;

    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={event => this.toParent(event, parent.id)}
              >
                Replying to @{parent.name}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  };
}

export default connect(mapStateToProps)(Tweet);
