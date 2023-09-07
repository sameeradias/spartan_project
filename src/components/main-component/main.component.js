import React from "react";

const MainComponent = () => {
    return(
        <section className="ftco-section">
            <div className="container">
                <h1 className="d-flex justify-content-center my-5">To Automate the Titration Process</h1>
                <div className="row justify-content-center my-5">
                    <div className="col-md-4 justify-content-center">
                       <div className="row d-flex">
                           <div className="col-2">
                               <img src="../../static/images/envelope.png" alt="env"/>
                           </div>
                           <div className="col">
                               <h4>Start titration process</h4>
                           </div>
                           <p className="align-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptatum!</p>
                           <button className="btn btn-primary">Get Started</button>
                       </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <div className="row bg-success rounded">
                            <div className="col-2">
                                <img src="../../static/images/envelope.png" alt="env"/>
                            </div>
                            <div className="col">
                                <h4>View Previous Titration Results</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptatum!</p>
                            <button className="btn btn-secondary">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainComponent;