import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/dogs">
          All Your Dogs
        </Link>
        <Link className="navLink" to="/upload">
          Upload Some Dogs
        </Link>
        {this.props.username && (
          <button onClick={this.props.signOut}>Sign Out</button>
        )}
      </>
    );
  }
}

export default NavBar;
