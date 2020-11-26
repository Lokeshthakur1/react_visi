/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../app/links';
export default class Footer extends Component {
    render() {
        return (
            <footer className="text-center text-md-left pt-0 bg-footer">
                <div className="blue">
                    <div className="container">

                        {/*Grid row*/}
                        <div className="row py-4 d-flex align-items-center">

                            {/*Grid column*/}
                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-md-0">
                                <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                            </div>
                            {/*Grid column*/}

                            {/*Grid column*/}
                            <div className="col-md-6 col-lg-7 text-center text-md-right">
                                {/*Facebook*/}
                                <a className="p-2 m-2 fa-lg fb-ic ml-0">
                                    <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                                </a>
                                {/*Twitter*/}
                                <a className="p-2 m-2 fa-lg tw-ic">
                                    <i className="fab fa-twitter white-text mr-lg-4"> </i>
                                </a>
                                {/*Google +*/}
                                <a className="p-2 m-2 fa-lg gplus-ic">
                                    <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
                                </a>
                                {/*Linkedin*/}
                                <a className="p-2 m-2 fa-lg li-ic">
                                    <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
                                </a>
                                {/*Instagram*/}
                                <a className="p-2 m-2 fa-lg ins-ic">
                                    <i className="fab fa-instagram white-text mr-lg-4"> </i>
                                </a>
                            </div>
                            {/*Grid column*/}

                        </div>
                        {/*Grid row*/}
                    </div>
                </div>

                {/*Footer Links*/}
                <div className="container mt-5 mb-4 text-center text-md-left">
                    <div className="row mt-3">

                        {/*First column*/}
                        <div className="col-md-4 mb-5">
                            <img className="mb-5" src="img/logo/logo.png" width="150px" />

                            <p className="text-justify">We help companies Build Intelligent Enterprises by leveraging the emerging and next-generation technologies to accelerate digital transformation and speed of innovation to provide competitive advantage and success as the Enterprise of Tomorrow.</p>
                        </div>
                        {/*/.First column*/}

                        {/*Second column*/}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-5">
                            <h6 className="spacing font-weight-bold">
                                Explore
                            </h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>
                                <Link to={Links.Home}>Home</Link>
                            </p>
                            <p>
                                <Link to={Links.About}>About</Link>
                            </p>
                            {/* <p>
                                <Link to={Links.Industries}>Industries</Link>
                            </p> */}
                            <p>
                                <Link to={Links.Solution}>Solutions</Link>
                            </p>
                            <p>
                                <Link to={Links.Services}>Services</Link>
                            </p>
                        </div>
                        {/*/.Second column*/}

                        {/*Fourth column*/}
                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <h6 className="spacing font-weight-bold">
                                Address
                            </h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />

                            <p>
                                <i className="fas fa-home mr-3"></i> <span className="font-weight-bold">USA OFFICE</span><br />

                                46560 Fremont Blvd, Suite 406, Fremont, CA 94538</p>

                            <p>
                                <i className="fas fa-home mr-3"></i><span className="font-weight-bold">INDIA OFFICE</span><br />
                                202 SDF Building, Sector V, Salt Lake, Kolkata 700091 <br /> West Bengal, India</p>
                            {/* <p>
                            <i className="fas fa-envelope mr-3"></i> info@example.com</p> */}
                            <p>
                                <i className="fas fa-phone mr-3"></i> <span className="font-weight-bold">+1 (714)-388-6646</span></p>

                        </div>
                        {/*/.Fourth column*/}

                    </div>
                </div>
                {/*/.Footer Links*/}

                {/* Copyright*/}
                <div className="footer-copyright text-center py-3 special-color-dark white-text">
                    <div className="container-fluid">
                        <span className="white-text" style={{ fontWeight: '100' }}>© Copyright 2020. All Rights Reserved.</span><span
                            className="px-2 white-text">|</span><span><Link to={Links.PrivacyPolicy} target="_blank"
                                className="white-text" style={{ fontWeight: '600' }}>Privacy Policy Terms & Conditions</Link></span>
                    </div>
                </div>
            </footer>
        )
    }
}
