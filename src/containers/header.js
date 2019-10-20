import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div>
          <Link to="/" style={{padding: '5px'}}>
            Home
          </Link>
          <Link to="/component1" style={{padding: '5px'}}>
            Component1
          </Link>
          <Link to="/component2" style={{padding: '5px'}}>
            Component2
          </Link>
          <Link to="/component3" style={{padding: '5px'}}>
            Component3
          </Link>

          {/*<Link to={
            {
              pathname: '', // string that matches the route (default property for `to`)
              search: '', // search queries passed in the URL [backend API] (ie. user submitted a form)
              hash: '', // same as vanilla HTML (to go to specific part of the page)
              state: '', // classic JS object (different from React and Redux state and does not affect these states)
            }
          }>
            Good to know
          </Link>*/}
        </div>
    );
  }
}

export default Header;
