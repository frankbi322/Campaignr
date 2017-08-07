import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Campaignr
          </a>
          <ul className="right">
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
