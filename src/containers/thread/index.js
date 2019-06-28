import React, { Component } from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

class ThreadFullPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 5
    };
  }

  handleVote(amount) {
    let newscore = this.state.score + amount;
    this.setState({ score: newscore });
  }
  render() {
    return (
      <div>
        <Header
          style={{ position: "relative" }}
          searchBar={false}
          onChange={value =>
            this.setState({ searchKeyWord: value.toLowerCase() })
          }
        />
        <div className="row">
          <div className="col-8 offset-2 mt-3">
            <div className="row bg-white pr-3 pl-3 pt-2 pb-3 mt-3">
              <div className="question-top">
                <div className="left-q">
                  <div className="col-1 rate-button align-items-center ">
                    <i
                      className="fa fa-angle-up"
                      style={{ "font-size": 30, cursor: "pointer" }}
                      onClick={() => this.handleVote(1)}
                    />
                    <div
                      className="score"
                      style={{ cursor: "default", padding: "0px !important" }}
                    >
                      {" "}
                      {this.props.score || this.state.score}
                    </div>

                    <i
                      className="fa fa-angle-down"
                      style={{ "font-size": 30, cursor: "pointer" }}
                      onClick={() => this.handleVote(-1)}
                    />
                  </div>
                </div>
                <div className="right-q">
                  <div className="ques">
                    I am trying to store output from calculator and display on
                    label or text box in visual basic asp.net
                  </div>
                  <div className="time mt-2"> Mar 23, 2019 - 20 comments</div>
                  <div className="d-inline-flex pl-2 pr-2 pt-1 pb-1 bd-highlight mt-3">
                    asp.net
                  </div>
                </div>
              </div>
            </div>
            <div className="row bg-white pr-4 pl-4 pt-2 pb-2 mt-3">
              <Link to="/user">
                <div className="profile-header">
                  <div className="avatar-left pr-2">
                    <img src="/vendors/img/user-avatar.jpg" />
                  </div>
                  <div className="right-wrap pl-1">
                    <div className="name">
                      <div className="pro">PRO</div>
                      White Castaneda
                    </div>
                    <div className="time">2 days ago </div>
                  </div>
                </div>
              </Link>

              <p className="p-not-code mt-2">
                Create two buttons: <br />- store data: The store data will
                store the results into array
                <br /> - display data: The display data will display the
                contents of the array (use 10 for the array size)
                <br /> btnStore is not storing array and btnDisplay is not
                displaying array on Label.
                <br /> So far the code works on visual basic as an application.
                However, when I use it to build an asp.net page it is telling me
                'items' is not member of 'Label'
              </p>
              <div className="bottom d-flex align-items-center">
                <div className="row-1 rate-button align-items-center ">
                  <i
                    className="fa fa-angle-up"
                    style={{ "font-size": 30, cursor: "pointer" }}
                    onClick={() => this.handleVote(1)}
                  />
                  <div
                    className="score"
                    style={{ cursor: "default", padding: "0px !important" }}
                  >
                    {" "}
                    {this.props.score || this.state.score}
                  </div>

                  <i
                    className="fa fa-angle-down"
                    style={{ "font-size": 30, cursor: "pointer" }}
                    onClick={() => this.handleVote(-1)}
                  />
                </div>
                <div className="ml-5 mr-4 btn-cus">reply</div>
                <div className="ml-3 btn-cus">quote</div>
              </div>
            </div>
            <div className="row bg-white  pr-4 pl-4 pt-2 pb-2 mt-3">
              <div className="profile-header pt-2">
                <div className="avatar-left pr-2">
                  <img src="/img/tutor/tutor-5.png" />
                </div>
                <div className="right-wrap pl-1">
                  <div className="name">Anh Thuy Le</div>
                  <div className="time">Just now </div>
                </div>
              </div>

              <p className="p-not-code mt-2">
                As for saying the array isn't populated...given the potential
                problems with displaying it, how do you know this? Have you
                stepped through the code with the debugger? If so, then you
                could follow the paths taken by the code and what the values of
                the variables are. Without seeing your input data we can't ever
                be 100% sure what it will do
              </p>
              <div className="bottom d-flex align-items-center">
                <div className="row-1 rate-button align-items-center ">
                  <i
                    className="fa fa-angle-up"
                    style={{ "font-size": 30, cursor: "pointer" }}
                    onClick={() => this.handleVote(1)}
                  />
                  <div
                    className="score"
                    style={{ cursor: "default", padding: "0px !important" }}
                  >
                    {" "}
                    0
                  </div>

                  <i
                    className="fa fa-angle-down"
                    style={{ "font-size": 30, cursor: "pointer" }}
                    onClick={() => this.handleVote(-1)}
                  />
                </div>
                <div className="ml-5 mr-4 btn-cus">reply</div>
                <div className="ml-3 btn-cus">quote</div>
              </div>
            </div>

            <div className="row bg-white  pr-4 pl-4 pt-2 pb-2 mt-3">
              <div className="profile-header pt-2">
                <div className="avatar-left pr-2">
                  <img src="/img/tutor/tutor-3.png" />
                </div>
                <div className="right-wrap pl-1">
                  <div className="name">Jim Tran</div>
                  <div className="time">Just now </div>
                </div>
              </div>

              <p className="p-not-code mt-2">
                You can't just simply dump an array into a label and expect it
                to be visible. The computer has no idea how you want it to be
                presented. You'll have to loop through the array and build a
                string which looks the way you want it, abd that can then be
                given to the label
              </p>
              <div className="bottom d-flex align-items-center">
                <div className="row-1 rate-button align-items-center ">
                  <i
                    className="fa fa-angle-up"
                    style={{ "font-size": 30, cursor: "pointer" }}
                    onClick={() => this.handleVote(1)}
                  />
                  <div
                    className="score"
                    style={{ cursor: "default", padding: "0px !important" }}
                  >
                    {" "}
                    0
                  </div>

                  <i
                    className="fa fa-angle-down"
                    style={{ "font-size": 30, cursor: "pointer" }}
                    onClick={() => this.handleVote(-1)}
                  />
                </div>
                <div className="ml-5 mr-4 btn-cus">reply</div>
                <div className="ml-3 btn-cus">quote</div>
              </div>
            </div>
            <div className="row bg-white  pr-4 pl-4 pt-2 pb-2 mt-3">
              <form className="w-100">
                <div className="form-group">
                  <label for="exampleInputEmail1">Write an answer</label>
                  <textarea
                    type="text"
                    className="form-control w-100  content-in-thread"
                    id="inputText"
                    placeholder="Type post content here"
                  />
                </div>

                <button
                  type="submit"
                  className="btn pt-1 pb-1 pl-3 pr-3"
                  style={{ backgroundColor: "#a56a4b", color: "white" }}
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreadFullPage;
