import React, { Component } from "react";

class ThreadCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 1
    };
    this.handleVote = this.handleVote.bind(this);
  }
  handleVote(amount) {
    let newscore = this.state.score + amount;
    this.setState({ score: newscore });
  }
  render() {
    return (
      <div className="card-thread-wrapper">
        <div className="rate-button">
          <i
            className="fa fa-angle-up"
            style={{ "font-size": 30 }}
            onClick={() => this.handleVote(1)}
          />
          <div className="score"> {this.state.score}</div>

          <i
            className="fa fa-angle-down"
            style={{ "font-size": 30 }}
            onClick={() => this.handleVote(-1)}
          />
        </div>
        <div className="mid-card-wrapper">
          <p className="title-card-thread">
            I am trying to store output from calculator and display on label or
            text box in visual basic asp.net
          </p>
          <div className="topic-list-wrapper">
            <div className="topic-card">asp.net</div>
          </div>
        </div>
        <div className="button-right">
          <i className="fa fa-star-o" style={{ "font-size": 20 }} />
          <i className="fa fa-comment-o" style={{ "font-size": 20 }} />
          <i className="fa fa-share" style={{ "font-size": 20 }} />
        </div>
      </div>
    );
  }
}

export default ThreadCard;
