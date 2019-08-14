import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

class Tweet extends Component {
  render() {
    return <div className="tweet">{console.log(this.props)}</div>;
  }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id];

  return {
    tweet: formatTweet(tweet, users[tweet.author], authedUser)
  };
}

export default connect(mapStateToProps)(Tweet);
