import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class Environmental extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Environment
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img alt="img" src="img/svg/environment.svg" alt="environment" className="w-100" />
                                    </div>
                                    <p className="text-justify">VisionAize Ai powered solutions empowers communities, businesses and legislators to increase the awareness of the health impact of local air pollution and informs plans to minimize exposure.</p>
                                    <p className="text-justify">We are helping industries with eco friendly & eco efficient innovative technologies to assist environment growth by air pollution monitor & prediction . Our Ai based solutions are playing a key role in the environment industry, pollution management & resource management. </p>


                                    <div className="row">
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <h4 className="font-weight-bold p-3">Focusing on health and wellbeing</h4>

                                                <ul className="list-group list-group-flush pb-5 pt-3">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>“The true cost of climate change is felt in our hospitals and in our lungs” – WHO</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Urban neighborhoods suffer serious health implications from air pollution which particularly affect young children, the elderly and the vulnerable</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>VisionAize helps communities make informed decisions on their day to day activities: best time for children to be outdoors or alternative bus stops to avoid heavy pollution</li>
                                                </ul>

                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <h4 className="font-weight-bold p-3">Transforming communities of the future</h4>

                                                <ul className="list-group list-group-flush pb-5 pt-3">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Sustainable cities have to consider social, economic & environmental impacts to remain resilient into the future</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>VisionAize helps communities take part in understanding their environment by providing hyper-local measurements to enable intervention at a localized level</li>

                                                </ul>

                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <h4 className="font-weight-bold p-3">Identify clean and green routes</h4>

                                                <ul className="list-group list-group-flush pb-5 pt-3">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Green urban spaces help filter harmful air pollution, including airborne particulate matter and are a great benefit to the environment</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Combining the local air quality data with external data such as traffic & weather information, VisionAize uses machine learning to guide on the ‘cleanest’ & ‘greenest’ zones</li>

                                                </ul>

                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <h4 className="font-weight-bold p-3">Leading the proposition against pollution</h4>

                                                <ul className="list-group list-group-flush pb-5 pt-3">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>VisionAize is leading the proposition towards a pollution free environment by facilitating dialogue with community & city authorities</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>By identifying key local pollution sources, VisionAize enables the design & development of localised control prescriptions and helps build community awareness</li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.AirPollutionMonitoringPrediction}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Air Pollution Monitoring and
                                            Prediction</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
