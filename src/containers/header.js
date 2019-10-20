import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  state = {
    nums:
        [
          {id: 1},
          {id: 2},
          {id: 3},
        ],
  };

  render() {
    return (
        <div>
          <Link to="/" style={{padding: '5px'}}>
            Home
          </Link>
          {this.state.nums.map(num =>
              <Link key={num.id} to={{pathname: '/component/' + num.id}}
                    style={{padding: '5px'}}>
                Component {num.id}
              </Link>,
          )}

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
