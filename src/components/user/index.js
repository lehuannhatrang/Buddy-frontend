import React, { Component } from "react";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="user-page-cover">
          <img src="/vendors/img/user-cover.png" />
        </div>
        <div className="user-avatar-info-wrapper">
          <img src="/vendors/img/user-avatar.png" />
        </div>
      </div>
    );
  }
}

export default UserPage;
