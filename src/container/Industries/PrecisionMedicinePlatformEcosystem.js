import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class PrecisionMedicinePlatformEcosystem extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-4 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        PRECISION MEDICINE<span className="font-weight-light"> PLATFORM</span><br />
                                        <small>SOLUTION ECOSYSTEM & LAYOUT</small>
                                    </h2>
                                    <div className="row">

                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <img alt="img" src="img/Images/SOLUTION ECOSYSTEM & LAYOUT.jpg" className="img-fluid p-4" />
                                            </div>
                                        </div>
                                    </div>


                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.EmployeeAttr} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Employee Attrition and Retain</span></Link>
                                    <Link to={Links.EmployeeEngagement} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Employee Engagement</span></Link>
                                    <Link to={Links.EmployeeProductivity} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Employee Productivity</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
