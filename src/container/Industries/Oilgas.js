import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';

export default class Oilgas extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Oil & Gas <span className="font-weight-light">Situational Awareness
                                        Solutions</span>
                                    </h2>
                                    <div className="text-center mb-4">
                                        <img alt="img" src="img/svg/oil&gas.svg" className="img-fluid w-100" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mt-3">
                                            <h4 className="title mb-5 wow fadeIn" data-wow-delay="0.2s">
                                                Intelligent, integrated systems for critical infrastructure protection
                                </h4>
                                            <p className="text-justify">
                                                Our cutting-edge, intelligent technology solutions offer the latest in complete system
                                                integration and situational awareness. All systems are based upon our centraco® Command
                                                and
                                                Control Software platform which allows for complete visibility of an unlimited number of
                                                systems and subsystems such as video management, access control and others.
                                </p>
                                            <p className="text-justify">
                                                All employees engaged in this industry are certified by the Department of Homeland
                                                Security
                                                to handle CVI or Chemical Vulnerability Information related to CFATS (Chemical Facility
                                                Anti-Terrorism Standards) compliance.
                                </p>


                                            <div className="list-group p-3 card shadow-lg">
                                                <h4 className="title mb-4 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                                    Applications include
                                </h4>
                                                <ul className="list-group list-group-flush py-3">
                                                    <li className="list-group-item"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span>Facility Safety & Security
                                    </li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>CFATS
                                        Compliance</li>
                                                    <li className="list-group-item"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span>Enterprise Information Management &
                                        Consolidation</li>
                                                    <li className="list-group-item"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span>Emergency Preparedness</li>
                                                    <li className="list-group-item"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span>Security Consulting</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    <Link to={Links.DrillingNptPredictor} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Drilling/NPT Analyzer and Predictor</span></Link>
                                    <Link to={Links.IncidentAnalyzerPredictor} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Incident Analyzer & Predictor (Refinery &
                                        Pipeline</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main >
        )
    }
}
