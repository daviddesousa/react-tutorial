import React, {Component} from 'react';
import {connect} from 'react-redux';

import Component1 from './functional/component1';
import Callback from './functional/callback';
import ProtectedRoute from './functional/protectedroute';
import UnauthRedirect from './functional/unauthredirect';

import Auth from './utils/auth';
import * as ACTIONS from './store/actions/actions';

import Container1 from './containers/container1';
import Header from './containers/header';
import Profile from './containers/profile';

import history from './utils/history';
import AuthCheck from './utils/authcheck';

import {Router, Route, Switch, Redirect} from 'react-router';

const auth = new Auth();

const handleAuthentication = (props) => {
  if (props.location.hash) {
    auth.handleAuth();
  }
};

const PrivateRoute = ({component: Component, auth}) => (
    <Route render={props => auth.isAuthenticated() === true
        ? <Component auth={auth} {...props}/>
        : <Redirect to={{pathname: '/redirect'}}/>
    }
    />
);

class Routes extends Component {
  componentDidMount() {
    if (auth.isAuthenticated()) {
      this.props.login_success();
      auth.getProfile();
      setTimeout(() => {
        this.props.add_profile(auth.userProfile);
      }, 2000);
    } else {
      this.props.login_failure();
      this.props.remove_profile();
    }
  }

  render() {
    return (
        <div>
          <Router history={history}>
            <div>
              <Header auth={auth}/>
              <Switch>
                <Route exact path="/"
                       render={() => <Container1 auth={auth}/>}/>
                <Route path="/authcheck"
                       render={() => <AuthCheck auth={auth}/>}/>
                <Route path="/redirect"
                       component={UnauthRedirect}/>

                <Route path="/callback"
                       render={(props) => {
                         handleAuthentication(props);
                         return <Callback/>;
                       }}/>
                <Route path="/component/:id"
                       render={(props) => <Component1 {...props}/>}/>

                <PrivateRoute path="/privateroute" auth={auth}
                              component={ProtectedRoute}/>
                <PrivateRoute path="/profile" auth={auth}
                              component={Profile}/>
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure()),
    add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
    remove_profile: () => dispatch(ACTIONS.remove_profile()),
  };
}

export default connect(null, mapDispatchToProps)(Routes);
