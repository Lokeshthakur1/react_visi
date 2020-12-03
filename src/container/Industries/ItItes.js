import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class ItItes extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-md-5 mb-2 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        IT & ITES
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/itItes.svg" alt="environment" className="w-100" />
                                    </div>
                                    <p className="text-justify">Ai in IT has become crucial in the automating process by managing and using information based on Ai powered solutions & machine learning techniques. Our Ai powered solutions also entails accumulating, preserving and distribution of organizational information for business leaders. We enable effortless accessible IT & ITES solutions for most of the complex problems for companies who deal with large no. of customer data.
</p>
                                    <p className="text-justify">VisionAize works in the artificial domain to automate the processes of running and managing the networks. We help businesses to understand and improve overall business  processes & patterns with Ai based solutions.  </p>


                                    <div className="row wow  px-2 justify-content-center fadeIn" data-wow-delay="0.4s">
                                        <div className="text-left col-lg-4 col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img alt="img" src="img/Images/Advanced Analytics.jpg"
                                                    className="img_bg" />

                                                <h6>Enterprise Application Platform<br /> <Link to={Links.Enterprise}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-lg-4 col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img alt="img" src="img/Images/data_information.jpg"
                                                    className="img_bg" />
                                                <h6>Software as a Service (SaaS) Framework<br /> <Link to={Links.SoftwareServices}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-lg-4 col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img alt="img" src="img/Images/bussinessb.jpg"
                                                    className="img_bg" />
                                                <h6>Business Process Automation Platform<br /> <Link
                                                    to={Links.BusinessProcess}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-lg-6 col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img alt="img" src="img/Images/realtimep.jpg"
                                                    className="img_bg" />
                                                <h6>Real Time Processing Framework<br /> <Link to={Links.RealTime}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-lg-6 col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img alt="img" src="img/Images/XML-Data-Management.jpg"
                                                    className="img_bg" />
                                                <h6>Data Management Framework<br /> <Link to={Links.XmlData}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    <Link to={Links.AdobeCaseStudy}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Adobe Case Study</span></Link>
                                    <Link to={Links.TransportRouteOptimization}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Transport Route Optimization</span></Link>
                                    <Link to={Links.InsurancePolicyRenewability}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Insurance Policy Renewability</span></Link>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
