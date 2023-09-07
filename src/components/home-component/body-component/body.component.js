import React from "react";
import './body.component.css';
const BodyComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 className="title display-3" data-aos="fade-up">Automated Titration System</h1>
                    <div className="row d-flex justify-content-evenly">
                        <button className="btn btn-primary col-4">Get Started</button>
                        <a className="col mx-5" href="#">View More</a>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                    <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default BodyComponent