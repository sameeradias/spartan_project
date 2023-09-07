import React from "react";
function RegisterComponent() {

    function getFullName(val) {}

    function getPassword(val) {}

    function onSubmit(e) {
        e.preventDefault();
    }
    return(
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="img">
                                </div>
                                <div className="login-wrap p-4 p-md-5">
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <h3 className="mb-4">Sign Up</h3>
                                        </div>
                                        <div className="w-100">
                                            <p className="social-media d-flex justify-content-end">
                                                <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                                                <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                                            </p>
                                        </div>
                                    </div>
                                    <form action="#" className="signin-form">
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="name">Full Name</label>
                                            <input onChange={getFullName} type="text" className="form-control" placeholder="John Doe" required/>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="password">Password</label>
                                            <input onChange={getPassword} type="password" className="form-control" placeholder="******" required/>
                                        </div>
                                        <div className="form-group">
                                            <button onClick={onSubmit} type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                        </div>
                                    </form>
                                    <p className="text-center">Already a Member? <a data-toggle="tab" href="#">Sign In</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RegisterComponent;