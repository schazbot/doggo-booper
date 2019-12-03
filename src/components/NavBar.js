import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav class="nav-bar">
        <Link className="navLink" to="/home">
          Home
        </Link>
        <Link className="navLink" to="/dogs">
          All Your Dogs
        </Link>
        <Link className="navLink" to="/upload">
          Upload Some Dogs
        </Link>
        {this.props.currentUser ? (
          <Link className="navLink" onClick={this.props.signOut}>
            Sign Out
          </Link>
        ) : (
          <Link className="navLink" to="/signup">
            Sign Up
          </Link>
        )}
      </nav>
    );
  }
}

export default NavBar;
