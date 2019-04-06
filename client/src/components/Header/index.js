import React, {Component} from 'react';
import './header.scss';
import {NavLink} from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <header>
                <NavLink to="/"><img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
                    alt="react logo"/></NavLink>
                <h1>Movies Library React/Node.js App</h1>
            </header>
        )
    }
}

export default Header;
