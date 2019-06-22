import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../login";
import DashBoard from "../dashboard";
import NotFound from "../errors/NotFound";
import If from "../../components/control/If";
// import ThreadCard from "../../components/thread";
import UserPage from "../../components/user";

class Router extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <If condition={this.props.location.pathname !== '/login' && !localStorage.getItem('userToken')}>
                    <Redirect to={{pathname: '/login', state: {redirect: this.props.location.pathname}}} />
                </If> */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={DashBoard} />
          <Route path="/test" component={UserPage} />
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Router;
