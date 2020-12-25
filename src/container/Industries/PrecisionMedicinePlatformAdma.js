import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class VirtualClinic extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-4 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        PRECISION MEDICINE <span className="font-weight-light"> PLATFORM</span>
                                        <br /><small>FOR DIABETIC MACULAR EDEMA</small>
                                    </h2>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="list-group card shadow-lg">
                                                <img alt="img" src="img/Images/SOLUTION ECOSYSTEM & LAYOUT.jpg" className="img-fluid p-4" />
                                                <ul className="list-group list-group-flush py-3">
                                                    <li className="list-group-item"><span className="pr-4">
                                                        <i className="fas fa-check"></i></span>DECISION SUPPORT FOR ANTI-VEGF THERAPY</li>
                                                    <li className="list-group-item"><span className="pr-4">
                                                        <i className="fas fa-check"></i></span>OUTCOME ASSESSMENT</li>
                                                    <li className="list-group-item"><span className="pr-4">
                                                        <i className="fas fa-check"></i></span>INSIGHT FOR THERAPY CHOICE</li>
                                                    <li className="list-group-item"><span className="pr-4">
                                                        <i className="fas fa-check"></i></span>IMPROVES EFFCIENCY AND THERAPY OUTCOME</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    <Link to={Links.CollaborativeHealth} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Collaborative Healthcare</span></Link>
                                    <Link to={Links.PopulationHealthcare} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Population Healthcare</span></Link>
                                    <Link to={Links.PreventiveHealthcare} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Preventive Healthcare</span></Link>
                                    <Link to={Links.DecisionSupports} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Decision Support for Hospital</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
