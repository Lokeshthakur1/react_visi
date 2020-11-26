import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class VirtualClinic extends Component {
    render() {
        return (
            <main>

                <section class="py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <section>
                                    <h2 class="title mb-4 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        PRECISION MEDICINE <span class="font-weight-light"> PLATFORM</span>
                                        <br /><small>FOR DIABETIC MACULAR EDEMA</small>
                                    </h2>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="list-group card shadow-lg">
                                                <img src="img/Images/SOLUTION ECOSYSTEM & LAYOUT.jpg" className="img-fluid p-4" />
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4">
                                                        <i class="fas fa-check"></i></span>DECISION SUPPORT FOR ANTI-VEGF THERAPY</li>
                                                    <li class="list-group-item"><span class="pr-4">
                                                        <i class="fas fa-check"></i></span>OUTCOME ASSESSMENT</li>
                                                    <li class="list-group-item"><span class="pr-4">
                                                        <i class="fas fa-check"></i></span>INSIGHT FOR THERAPY CHOICE</li>
                                                    <li class="list-group-item"><span class="pr-4">
                                                        <i class="fas fa-check"></i></span>IMPROVES EFFCIENCY AND THERAPY OUTCOME</li>

                                                </ul>
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
