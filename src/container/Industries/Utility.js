/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Utility extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Utility
                            </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/utility.svg" className="img-fluid" height="400" />
                                    </div>
                                    <p className="text-justify">Utilities Industry has Significantly changed over the last few years. Customers have high expectations for online services and support, digital payment, and account management. Consumers expect a personalized experience for clean energy, prepaid billing, home energy management, to real-time outage reporting.
</p>
                                    <p className="text-justify">VisionAize Ai based solutions can digitally assist your business and customer relationships with AI & machine learning. We provide the simplest choices for complex problems with our high end solutions to customers on devices of your customer’s choice. With the help of data analysis you can predict consumer intent and then respond in real time, for creating happy customers.
</p>
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <div className="list-group card shadow-lg">
                                                <h5 className="font-weight-bold p-3">Customer Acquisition:</h5>
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item">
                                                        <span class="pr-4"><i class="fas fa-check"></i></span>
                                            Product based research, analysis & solutions.
                                        </li>
                                                    <li class="list-group-item">
                                                        <span class="pr-4"><i class="fas fa-check"></i></span>
                                            Offer creation
                                        </li>
                                                    <li class="list-group-item">
                                                        <span class="pr-4"><i class="fas fa-check"></i></span>
                                            Intent centric services
                                        </li>
                                                    <li class="list-group-item">
                                                        <span class="pr-4"><i class="fas fa-check"></i></span>
                                            Service Coverage & Locations.
                                        </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="list-group card shadow-lg">
                                                <h5 className="font-weight-bold p-3">Retention & Loyalty </h5>
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item">
                                                        <span class="pr-4"><i class="fas fa-check"></i></span>
                                            Customer Support

                                        </li>
                                                    <li class="list-group-item">
                                                        <span class="pr-4"><i class="fas fa-check"></i></span>
                                            Account Management programs

                                        </li>
                                                    <li class="list-group-item">
                                                        <span class="pr-4"><i class="fas fa-check"></i></span>
                                            Rebates & Reward Programs.

                                        </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="list-group card shadow-lg">
                                                <h5 className="font-weight-bold p-3">Cost Optimization & Reduction </h5>
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item">
                                                        <span class="pr-4"><i class="fas fa-check"></i></span>
                                    Enable self services across all channels

                                        </li>
                                                    <li class="list-group-item">
                                                        <span class="pr-4"><i class="fas fa-check"></i></span>
                            Lower average handling time with AI and chatbot experiences

                                        </li>


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.IntelligentDemandForecast} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Intelligent Demand Forecast</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
