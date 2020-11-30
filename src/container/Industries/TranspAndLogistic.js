/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class TranspAndLogistic extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Transportation and Logistics
                            </h2>
                                    <div className="mb-4 text-center">
                                        <img alt="img" src="img/svg/logistic_transportation.svg" className="w-100" />
                                    </div>
                                    <p className="text-justify">VisionAize is helping leading transport & logistic companies globally with Automated Ai powered solutions. We implement an Analytics driven Smart Mobility Platform enabling Multi-Modal Transport encompassing Pollution, Safety and Compliance</p>
                                    <p className="text-justify">Our AiML Solutions are focused with Multi-modal Transport Planning, Monitoring, Control for Citizen Connect & Engagement (Trip Planning with e-Ticketing) ,Travel Demand / Supply Management , Reduce Traffic Congestion for Smart Cities, Transport Department, Computers, Transport Aggregators. </p>
                                    <hr />
                                    <h4 className="font-weight-bold">
                                        How?
                                   </h4>
                                    <p className="text-justify">Analytics driven Smart Transport Framework providing real-time data collection [on board GPS device, POS, in-vehicle sensor data etc.], transport planning and analysis (route optimization / rationalization), control and stakeholder engagement and management [Mobile Apps for drivers and commuters, passenger information system, online booking etc.] </p>

                                    <img alt="img" src="img/Images/transportation_img.png" className="py-4 img-fluid" />
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    <Link to={Links.SmartTransportSolution} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Smart Transport Solution</span></Link>
                                    <Link to={Links.DemandSupplyHyperLogistics} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Demand Supply for Hyper Logistics</span></Link>
                                    <Link to={Links.IntraCityFreightFlow} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Intra City Freight Flow Analysis</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
