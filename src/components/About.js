import React from "react";
import './Home.css'

function About() {
    return (
        <>
            <div className="about container mt-5">
                <div className="row">
                    {/* <h1 className=" display-6 font-poppins col-12">About Us</h1> */}
                    <div>
                        <h3 className="mt-4 col-12"> Welcome to <b style={{ color: '#71BFBC' }}>CertificateGen</b> - Your Ultimate Bulk Software Generator!</h3>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <h4 className="mt-5 col-12" style={{ color: '#71BFBC' }}>Our Mission</h4>
                        <h6 className="col-12 mt-3">Our mission is to democratize software development by providing a user-friendly, efficient, and cost-effective platform for generating software applications in bulk. We aim to bridge the gap between the demand for custom software and the resources required to create it, making software development accessible to all.</h6>
                    </div>
                    <div className="col-xs-12  col-sm-6 col-md-6 col-lg-6">
                        <h4 className="mt-5 col-12" style={{ color: '#71BFBC' }}>Who We Are</h4>
                        <h6 className="col-12 mt-3">
                            We are a team of dedicated professionals, including experienced software developers, designers, and industry experts, who share a common vision of revolutionizing the way software is created and distributed. Our diverse backgrounds and expertise allow us to create a dynamic and innovative environment where creativity thrives.</h6>
                    </div>
                    <h4 className=" mt-5 text-center font-poppins">What Sets Us Apart</h4>
                    {/*  */}
                    <div className="row aboutcards">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 mt-4">
                            <div className="card" style={{ widht: '18rem', backgroundColor: '#21BFBC' }}>
                                <div className="card-body">
                                    <h5 className="card-title font-poppins fw-bolder">User-Centric Approach</h5>
                                    <p className="card-text ">Our user-friendly web application is designed with you in mind. We prioritize simplicity without compromising on functionality, ensuring that both novices and seasoned developers can use our platform with ease.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 mt-4">
                            <div className="card" style={{ widht: '18rem', backgroundColor: '#21BFBC' }}>
                                <div className="card-body">
                                    <h5 className="card-title font-poppins fw-bolder">Unmatched Efficiency</h5>
                                    <p className="card-text">We leverage cutting-edge technology to streamline the software generation process, saving you time and resources. Our platform automates repetitive tasks, allowing you to focus on what truly matters – building great software.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="card" style={{ widht: '18rem', backgroundColor: '#21BFBC' }}>
                                <div className="card-body">
                                    <h5 className="card-title font-poppins fw-bolder">Quality Assurance</h5>
                                    <p className="card-text">We are committed to delivering high-quality software solutions. Our rigorous testing and validation processes guarantee that the software generated meets the highest standards of performance and reliability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h4 className="mt-3 text-center font-poppins " >Join Us in Shaping the Future</h4>
                        <div className="mt-4">
                            <p>We believe in the power of technology to transform businesses and industries. By choosing <b style={{ color: '#71BFBC' }}>CertificateGen</b>, you become a part of a community that is reshaping the software development landscape. Together, we can unlock new possibilities, drive innovation, and achieve remarkable results.

                                Thank you for choosing <b>CertificateGen</b> as your trusted partner in software generation. We look forward to helping you achieve your software development goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default About