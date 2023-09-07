import React from "react";
import './navbar.component.css';
const NavbarComponent = () => {

    function contactUs() {
        console.log('contact us')
    }

    return(
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <a href="#"><img src="" alt="Spartan Logo"/></a>
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><button onClick={contactUs} className="btn btn-primary">Contact</button></li>
                    </ul>
                </div>
                <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
            </div>
        </nav>
    )
}

export default NavbarComponent;