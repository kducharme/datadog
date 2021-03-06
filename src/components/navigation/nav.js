import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav className="mainNavigation shoNuff" id="myId">
                <Link to="/">Home</Link>
                <Link to="/projects">List of Projects</Link>
            </nav>
        );
    }
}

export default Navigation;