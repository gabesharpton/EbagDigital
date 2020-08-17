import React from 'react';
import './stylesheets/navbar.css'
import logo from '../images/logo.png'
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div id='navbar-whole'>
            <BrowserRouter>
                <Route  path="/" />
                <Route  path="/ContactMe" />
                <Route  path="/AboutMe" />
                <Route  path="/PreviousWork" />
                    
                        <Link to="/">
                            <img src={logo} alt="logo" id='navbar-logo'></img>
                        </Link>

                        <Link to="/ContactMe" id='contactMe'>
                            Contact Me
                        </Link>

                        <Link to="/AboutMe" id="aboutMe">
                            About <br/>Me
                        </Link>

                        <Link to="/PreviousWork" id="previousWork">
                            Previous Work
                        </Link>
                
            </BrowserRouter>
        </div>

    )
}
export default Navbar;