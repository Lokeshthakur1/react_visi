import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class AirPollutionMonitoringPrediction extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Air Pollution Monitoring and Prediction
                                    </h2>
                                    <div className="my-4 text-center">
                                        <img alt="img" src="img/svg/pollution_moniter.svg" height="400" style={{ maxWidth: '100%' }} />
                                    </div>
                                    <div className="row">
                                        <div className="list-group card shadow-lg mb-3 p-3">
                                            <h4 className="font-weight-bold">The VisionAize Way</h4>

                                            <ul className="list-group list-group-flush pb-5 pt-3">
                                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><b>Monitor:</b> Capture real time and hyperlocal data using affordable sensor devices.</li>
                                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><b>Measure:</b> Collect pollution data and collate with other data sources such as meteorological and traffic data.</li>
                                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><b>Analyse:</b> Provide meaningful actionable insights and forecasts using AI modelling techniques.</li>
                                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><b>Act:</b> Recommend immediate actions to take and provide forecasts.</li>
                                            </ul>
                                        </div>
                                        <div className="list-group card shadow-lg mb-3 p-3">
                                            <h4 className="font-weight-bold px-3">How?</h4><hr />
                                            <p className="text-justify">With a beautifully designed mobile app, Cleair presents local air measurements on the most common pollutants. It provides easy to understand insights at your finger tips with explanations how these correlates with atmospheric conditions and seasonal factors and how these impact your health and well being.</p>
                                        </div>

                                        <div className="list-group card shadow-lg mb-3 p-3">
                                            <h4 className="font-weight-bold px-3">What makes VisionAize Unique? </h4><hr />
                                            <p className="text-justify">With a compact, weatherproof design, devices are affordable and easy to install and operate. The real time data collected in a centralized cloud platform and enriched with data from other sources to generate air quality mapping & exciting interactive visualizations. This information is presented in a clear and visually engaging way to help you identify different pollution sources in neighbourhoods (such as open fires or food carts) and gives you recommendations to minimize their impact on you.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    <Link to={Links.AirPollutionMonitoringPrediction}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Air Pollution Monitoring and
                                            Prediction</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </main >
        )
    }
}
