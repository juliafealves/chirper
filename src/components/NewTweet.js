import React, { Component } from "react";

const MAX_SIZE = 280;

class NewTweet extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    const text = event.target.value;

    this.setState(() => ({ text }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    console.log("New tweet", text);
  };

  render() {
    const { text } = this.state;
    const tweetLeft = MAX_SIZE - text.length;

    return (
      <div>
        <h3 className="center">Compose new Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={MAX_SIZE}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewTweet;
