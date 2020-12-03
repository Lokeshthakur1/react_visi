import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class TravelHospitality extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-md-5 mb-2 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Reduce operating costs and wait times
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img alt="img" src="img/svg/travel.svg" alt="environment" className="w-100" />
                                    </div>
                                    <p className="text-justify">The travel & hospitality industry needs to adapt to evolving business, technology, and market trends such as increased use of mobile devices and apps to enable more personalized travel experiences.</p>
                                    <p>VisionAize offers artificial intelligence self-service solutions and AI-powered agents to optimize the customer experience (CX) across messaging, voice, and digital channels. We deliver the only platform that leverages behavioral, transactional, and historical data to anticipate consumer intent. If your call centers are flooded with reservation inquiries, itinerary changes, cancellations, or simple purchase and rewards questions—and you want to increase customer satisfaction and lower operating costs—now is the time to deploy a VisionAize conversational AI solution.</p>
                                    <p>
                                        VisionAize Ai solutions Deliver Personalized, contextual and relevant user experience.
                                    </p>
                                    <div className="row mt-4 text-center">
                                        <div className="col-md-6 mb-4">
                                            <div className="border h-100 shadow p-3">
                                                <img alt="img" src="img/svg/user-experience.svg" height="70" />

                                                <h5 className="mt-3 font-weight-bold">Personalised Customer Experience</h5>
                                                <p>Apply machine learning to provide personalised customer experience by most relevant recommendations for their travel plans.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="border h-100 shadow p-3">
                                                <img alt="img" src="img/svg/ai_Bot.svg" height="70" />
                                                <h5 className="mt-3 font-weight-bold">Virtual Assistance by Chatbots</h5>
                                                <p>Ai based Automated chatbots or virtual assistance to travelers seeking help. They can be programmed in multi language & can perform dozens of other tasks.  </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6  mb-4">
                                            <div className="border h-100 shadow p-3">
                                                <img alt="img" src="img/svg/office_automation.svg" height="70" />
                                                <h5 className="mt-3 font-weight-bold">Back office Automation</h5>
                                                <p>Robotic Process Automation or RPA is the key tool to perform back office automation & demand forecasting.  </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6  mb-4">
                                            <div className="border h-100 shadow p-3">
                                                <img alt="img" src="img/svg/post-trip.svg" height="70" />
                                                <h5 className="mt-3 font-weight-bold">Post trip analysis</h5>
                                                <p>Post trip analysis by getting feedback & reviews help to understand & improvise the entire process. </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="border h-100 shadow p-3">
                                                <img alt="img" src="img/svg/operation.svg" height="70" />
                                                <h5 className="mt-3 font-weight-bold">Operations Management</h5>
                                                <p>Managing operations with a huge no. of passengers is a challenge for International Air transportation. AiML can help to predict passenger flow,  departures, trace baggage and other complex tasks.  </p>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    <Link to={Links.PriceOptimizationEngine}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Price Optimization Engine</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        )
    }
}
