import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {
        username: "",
        password: ""
    };

    render() {
        const styling = {
            width: '100px',
            padding: '12px',
            margin: '6px',
            border: '2px',
            background: 'grey',
            textDecoration: 'none',
            color: 'black',
        }

        return (
            <div className="nav">
                {this.props.logged_in ? (
                    <div>
                        <p> {`you're logged in as ${this.props.username}`}</p>
                        <button onClick={this.props.handleLogOut}>Log out</button>
                        <Link style={styling} to="/">Home</Link>

                        <Link style={styling} to="/dogs">All Your Dogs</Link>
                        <Link style={styling} to="/upload">Upload Some Dogs</Link>
                    </div>
                ) : (
                        <form>
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input
                                    onChange={this.props.handleChange}
                                    id="username"
                                    type="text"
                                    name="username"
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    onChange={this.props.handleChange}
                                    id="password"
                                    type="text"
                                    name="password"
                                />
                                <button onClick={this.props.onLoginClicked}>Log in</button>
                            </div>
                        </form>
                    )}



            </div>






        );
    }
}

export default NavBar;


