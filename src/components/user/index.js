import React, { Component } from "react";
import ThreadCardUser from "./threadcarduser";
import Header from "../header/Header";
import { Link } from "react-router-dom";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysdddd: [
        { dddd: "Monday", dd: 24 },
        { dddd: "Tuesday", dd: 25 },
        { dddd: "Wednesday", dd: 26 },
        { dddd: "Thursday", dd: 27 },
        { dddd: "Friday", dd: 28 },
        { dddd: "Saturday", dd: 29 },
        { dddd: "Sunday", dd: 30 }
      ],
      rate: ["324", "175", "93", "82", "75", "71", "55", "54", "38", "30"],
      questions: [
        "I am trying to store output from calculator and display on label or text box in visual basic asp.net",
        "nginx: send all requests to a single html page",
        "Linux / Bash, using ps -o to get process by specific name?",
        "Why does PostgreSQL's dt show only public schema tables?",
        "Type Hinting: Default Parameters",
        "How to search a Git repository by commit message?",
        "PostgreSQL, checking date relative to “today”",
        "How to exit if a command failed?",
        "How do I print out the count of unique matches with grep?",
        "how to get length of integers in PHP ?"
      ]
    };
  }
  render() {
    return (
      <div>
        <Header
          style={{ position: "relative" }}
          // searchBar
          // onChange={value =>
          //   this.setState({ searchKeyWord: value.toLowerCase() })
          // }
        />

        <div className="user-page-cover">
          <img src="/vendors/img/user-cover.png" />
          <div className="name-class-wrap">
            <div className="pro">PRO</div>
            <div className="name"> White Castaneda</div>
            <div className="class">Class of 2016 - Chemical Engineering</div>
          </div>
        </div>
        <div className="user-avatar-info-wrapper">
          <img src="/vendors/img/user-avatar.jpg" />
          <div className="user-info-wrapper">
            <div className="info-feature">
              <div className="about">ABOUT</div>
              <div className="about-content">
                fficia velit fugiat in Lorem ad do aute nisi do. Et cillum anim
                nisi sit sunt nulla adipisicing ullamco dolor ea ipsum qui.
                Minim cillum ad et excepteur sunt reprehenderit laborum laborum
                dolore non labore sunt.
              </div>
            </div>
            <div className="info-feature-num">
              <div className="friend">ANSWERS</div>
              <div className="num">10</div>
            </div>
            <div className="info-feature-num">
              <div className="friend">QUESTIONS</div>
              <div className="num">30</div>
            </div>
            <div className="info-feature-num">
              <div className="friend">REBUTATION</div>
              <div className="num">305</div>
            </div>
            <div className="info-feature-num">
              <div className="friend">ACHIVEMENTS</div>
              <div className="num">1</div>
            </div>
          </div>
        </div>

        <div className="main-wrapper-user">
          {/* <div className="calendar">
            <div className="month"> June 2019</div>
            <div className="week">
              {this.state.daysdddd.map((item, index) => {
                return (
                  <div className="day" key="index">
                    <div className="dddd">{item.dddd}</div>
                    <div className="dd">{item.dd}</div>
                  </div>
                );
              })}
            </div>
          </div> */}

          <div className="header-wrap">Top subjects</div>
          <hr />
          <div className="big-wrap-tag">
            <div className="tag-wrap">
              <div className="left">php</div>
              <div className="right">
                <div className="att">
                  Score
                  <span>1476</span>
                </div>
                <div className="att">
                  Posts
                  <span>1476</span>
                </div>
              </div>
            </div>
          </div>
          <div className="big-wrap-tag" id="row2">
            <div className="tag-wrap">
              <div className="left">linux</div>
              <div className="right">
                <div className="sm-att">
                  Score
                  <span>587</span>
                </div>
                <div className="sm-att">
                  Posts
                  <span>40</span>
                </div>
              </div>
            </div>
            <div className="tag-wrap">
              <div className="left">bash</div>
              <div className="right">
                <div className="sm-att">
                  Score
                  <span>318</span>
                </div>
                <div className="sm-att">
                  Posts
                  <span>46</span>
                </div>
              </div>
            </div>
          </div>
          <div className="big-wrap-tag" id="row3">
            <div className="tag-wrap">
              <div className="left">nosql</div>
              <div className="right">
                <div className="sm-att">
                  Score
                  <span>190</span>
                </div>
                <div className="sm-att">
                  Posts
                  <span>107</span>
                </div>
              </div>
            </div>
            <div className="tag-wrap">
              <div className="left">mysql</div>
              <div className="right">
                <div className="sm-att">
                  Score
                  <span>116</span>
                </div>
                <div className="sm-att">
                  Posts
                  <span>34</span>
                </div>
              </div>
            </div>
            <div className="tag-wrap">
              <div className="left">regex</div>
              <div className="right">
                <div className="sm-att">
                  Score
                  <span>103</span>
                </div>
                <div className="sm-att">
                  Posts
                  <span>42</span>
                </div>
              </div>
            </div>
          </div>
          <div className="view-all-btn">View all tags -></div>
          <div className="header-wrap">Top posts </div>
          <hr />
          <ul className="question-lst">
            {this.state.questions.map((item, index) => {
              return (
                <div className="item">
                  <div className="number">{this.state.rate[index]}</div>
                  <Link to="/thread/21230313">
                    <li key={index}>{item}</li>
                  </Link>

                  <hr />
                </div>
              );
            })}
          </ul>
          <hr />
        </div>
      </div>
    );
  }
}

export default UserPage;
