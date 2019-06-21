import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
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

    return(<>
        <Link style={styling} to="/">Home</Link>
        <Link style={styling} to="/dogs">All Your Dogs</Link>
        </>
        );
    }
}

export default NavBar;