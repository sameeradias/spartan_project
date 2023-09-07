import React from "react";
import './home.component.css';
import NavbarComponent from "./navbar-component/navbar.component";
import BodyComponent from "./body-component/body.component";
const HomeComponent = () => {
    return (
        <>
            <header>
                <NavbarComponent></NavbarComponent>
            </header>
            <main>
                <div className="container-fluid spacer"></div>
                    <BodyComponent></BodyComponent>
            </main>
        </>
    )
}

export default HomeComponent;