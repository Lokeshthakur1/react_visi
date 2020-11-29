import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class PriceOptimizationEngine extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Price Optimization Engine
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img alt="img" src="img/Images/travel_hospitality_1.jpg" alt="environment" className="w-100" />
                                    </div>
                                    <p className="text-justify">The travel & hospitality industry needs to adapt to evolving business, technology, and market trends such as increased use of mobile devices and apps to enable more personalized travel experiences.</p>
                                    <p>VisionAize offers artificial intelligence self-service solutions and AI-powered agents to optimize the customer experience (CX) across messaging, voice, and digital channels. We deliver the only platform that leverages behavioral, transactional, and historical data to anticipate consumer intent. If your call centers are flooded with reservation inquiries, itinerary changes, cancellations, or simple purchase and rewards questions—and you want to increase customer satisfaction and lower operating costs—now is the time to deploy a VisionAize conversational AI solution.</p>

                                    <div className="mb-4 text-center mt-3">
                                        <img alt="img" src="img/Images/travel_hospitality_2.jpg" alt="environment" className="w-100" />
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.PriceOptimizationEngine}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Price Optimization Engine</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
