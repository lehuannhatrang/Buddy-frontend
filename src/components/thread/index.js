import React, { Component } from "react";
import { Link } from "react-router-dom";

class ThreadCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      title: `I am trying to store output from calculator and display on label or
      text box in visual basic asp.net`,
      cardlist: ["python", "c++"],
      star: false,
      tags: []
    };
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(amount) {
    let newscore = this.state.score + amount;
    this.setState({ score: newscore });
  }

  handleClickOnTag(key) {
    let newTags = [];
    if (this.props.cardList.indexOf(key) > -1)
      newTags = this.state.tags.filter(element => element !== key);
    else newTags = this.state.tags.push(key);
    this.setState({ tags: newTags });
  }

  render() {
    return (
      <div
        className={`row card-thread-wrapper row d-flex justify-content-between pt-2 pb-2 ${this
          .props.className || ""}`}
        style={{ ...this.props.style }}
      >
        <div className="col-1 rate-button">
          <i
            className="fa fa-angle-up"
            style={{ "font-size": 30, cursor: "pointer" }}
            onClick={() => this.handleVote(1)}
          />
          <div className="score " style={{ cursor: "default" }}>
            {" "}
            {this.props.score || this.state.score}
          </div>

          <i
            className="fa fa-angle-down"
            style={{ "font-size": 30, cursor: "pointer" }}
            onClick={() => this.handleVote(-1)}
          />
        </div>
        <div className="col-10 mid-card-wrapper">
          <p className="title-card-thread mb-4 mt-3">
            <Link to="/thread/21230313">
            {this.props.title || this.state.title}
            </Link>
          </p>
          <div className="topic-list-wrapper">
            {this.props.cardList &&
              this.props.cardList.map((item, index) => {
                return (
                  <div
                    className="topic-card-chosen"
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => this.handleClickOnTag(index)}
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-1 button-right">
          {!this.state.star && (
            <i
              className="fa fa-star-o"
              style={{ "font-size": 18 }}
              onClick={() => this.setState({ star: true })}
            />
          )}
          {this.state.star && (
            <i
              className="fa fa-star"
              style={{ "font-size": 18, color: "#d1db11" }}
              onClick={() => this.setState({ star: false })}
            />
          )}
          <i className="fa fa-comment-o" style={{ "font-size": 18 }} />
          <i className="fa fa-share" style={{ "font-size": 18 }} />
        </div>
      </div>
    );
  }
}

export default ThreadCard;
