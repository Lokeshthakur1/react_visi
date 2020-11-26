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
                                    <h2 className="title mb-5 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        IT & ITES
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/itItes.svg" alt="environment" className="w-100" />
                                    </div>
                                    <p className="text-justify">Ai in IT has become crucial in the automating process by managing and using information based on Ai powered solutions & machine learning techniques. Our Ai powered solutions also entails accumulating, preserving and distribution of organizational information for business leaders. We enable effortless accessible IT & ITES solutions for most of the complex problems for companies who deal with large no. of customer data.  </p>
                                    <p className="text-justify">VisionAize works in the artificial domain to automate the processes of running and managing the networks. We help businesses to understand and improve overall business  processes & patterns with Ai based solutions.  </p>
                                </section>
                            </div>
                            <div className="col-md-4">



                                <div className="list-group fanylist_group">
                                    <Link to="enterprise"
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Enterprise Application Platform</span></Link>
                                    <Link to="/software-services"
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Software as a Service (SaaS) Framework</span></Link>
                                    <Link to="/business-process"
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Business Process Automation Platform</span></Link>
                                    <Link to="/real-time"
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Real Time Processing Framework</span></Link>
                                    <Link to="/xml-data"
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span> Data Management Framework</span></Link>
                                    <Link to="/ai-powered"
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span> AI-Powered Marketing Intelligence</span></Link>
                                    <Link to="/social-media"
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span> Social Media Intelligence</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
