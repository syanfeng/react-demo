import React, { Component } from "react";
import './header.css'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header className="s-header">
            <div className="s-header-brand">
                <h1><strong>Manager</strong></h1>
                {/* <small>...</small> */}
            </div>
            <ul className="s-nav s-nav-pills s-topbar-nav admin-topbar-right">
                <li>
                    <a className="s-dropdown-toggle" href="javascript:;">
                        <i className="icon-font icon-users"></i> 管理员
                    </a>
                </li>
                <li>
                    <a className="s-dropdown-toggle" href="javascript:;">
                        <strong>Sign In</strong>
                    </a>
                </li>
            </ul>
        </header>
    );
  }
}

export default Header;
