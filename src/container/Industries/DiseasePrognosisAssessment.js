import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class DiseasePrognosisAssessment extends Component {
    render() {
        return (
            <main>

                <section class="py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <section>
                                    <h2 class="title mb-4 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Disease Prognosis Assessment<span class="font-weight-light"> Platform</span>
                                    </h2>
                                    <div className="row">

                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <img src="img/Images/Disease Prognosis Assessment Platform__.jpg" className="img-fluid p-4" />
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4">
                                                        <i class="fas fa-check"></i></span>DESIGNED FOR COMPLEX LIFESTYLE DISEASES</li>
                                                    <li class="list-group-item"><span class="pr-4">
                                                        <i class="fas fa-check"></i></span>PROMOTES PATIENTS ENGAGEMENT</li>
                                                    <li class="list-group-item"><span class="pr-4">
                                                        <i class="fas fa-check"></i></span>SUPPORTS EARLY INTERVENSION & MANAGEMENT</li>
                                                    <li class="list-group-item"><span class="pr-4">
                                                        <i class="fas fa-check"></i></span>IMPROVES PATIENT AWARENESS</li>
                                                    <li class="list-group-item"><span class="pr-4">
                                                        <i class="fas fa-check"></i></span>THERAPY OUTCOME MONITORING</li>
                                                    <li class="list-group-item"><span class="pr-4">
                                                        <i class="fas fa-check"></i></span>APP BASED REMOTE PATIENT MONITORING</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <img src="img/Images/Disease Prognosis Assessment Platform_.jpg" className="img-fluid p-4" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <img src="img/Images/Disease Prognosis Assessment Platform_.jpg" className="img-fluid p-4" />
                                            </div>
                                        </div>
                                    </div>


                                </section>
                            </div>
                            <div class="col-md-4">
                                <div class="list-group fanylist_group">
                                    <Link to={Links.EmployeeAttr} class="list-group-item list-group-item-action"> <i
                                        class="fas fa-check mr-2"></i> <span>Employee Attrition and Retain</span></Link>
                                    <Link to={Links.EmployeeEngagement} class="list-group-item list-group-item-action">
                                        <i class="fas fa-check mr-2"></i> <span>Employee Engagement</span></Link>
                                    <Link to={Links.EmployeeProductivity} class="list-group-item list-group-item-action">
                                        <i class="fas fa-check mr-2"></i> <span>Employee Productivity</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
