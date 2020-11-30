import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class SafetySecurity extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Safety And Security
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img alt="img" src="img/svg/environment.svg" alt="environment" className="w-100" />
                                    </div>
                                    <p className="text-justify">Comming Soon</p>

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
                </section>
            </main>
        )
    }
}
