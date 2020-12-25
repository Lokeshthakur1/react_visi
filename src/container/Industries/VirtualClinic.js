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
                                        Virtual <span className="font-weight-light"> Clinic</span>
                                    </h2>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="list-group card shadow-lg">
                                                <img alt="img" src="img/Images/SOLUTION_ECOSYSTEM.jpg" className="img-fluid p-4" />
                                                <ul className="list-group list-group-flush py-3">
                                                    <li className="list-group-item"><span className="pr-4">
                                                        <i className="fas fa-check"></i></span>ENSURE CLINIC ADHERANCE</li>
                                                    <li className="list-group-item"><span className="pr-4">
                                                        <i className="fas fa-check"></i></span>BETTER CARE COORDINATION</li>
                                                    <li className="list-group-item"><span className="pr-4">
                                                        <i className="fas fa-check"></i></span>IMPROVED DATA INTEGRATION & REPORTING</li>
                                                    <li className="list-group-item"><span className="pr-4">
                                                        <i className="fas fa-check"></i></span>IMPROVED DATA VISUALIZATION</li>
                                                    <li className="list-group-item"><span className="pr-4">
                                                        <i className="fas fa-check"></i></span>SEAMLESS INTEGRATION WITH THIRDPARTY APPLICATIONS AND SOFTWARE</li>
                                                    <li className="list-group-item"><span className="pr-4">
                                                        <i className="fas fa-check"></i></span>APP BASED REMOTE PATIENT MONITORING</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <img alt="img" src="img/Images/SOLUTION_LAYOUT.jpg" className="img-fluid p-4" />
                                            </div>
                                        </div>

                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg p-3">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered box-table">
                                                        <thead className="blue-1 white-text">
                                                            <tr>
                                                                <th style={{ width: 200 }}>INDUSTRY CHALLENGE</th>
                                                                <th>CURRENT SOLUTION</th>
                                                                <th>VERTUAL CLINICAL TRIAL PLATFORM</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>High Drop-out rate (&gt; 40%)</td>
                                                                <td>Dropout in longitudinal randomized controlled trials is common and a potential source of bias in terms of evidence-based medicine</td>
                                                                <td>Reduces drop-out rate by ensuring clinic adherence and better care coordination.</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Clinical Trial Reporting</td>
                                                                <td>
                                                                    <ul>
                                                                        <li>Data locked within clinical</li>
                                                                        <li>applications with hard-coded reporting.</li>
                                                                    </ul>
                                                                </td>
                                                                <td>
                                                                    <ul>
                                                                        <li>Cross-study operational data</li>
                                                                        <li>reporting intelligent reporting tools</li>
                                                                    </ul>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Patient Adherence & Monitoring</td>
                                                                <td>
                                                                    <p>Highly decentralized with high dependence on patient revisits at clinic & Hospitals/ research centers</p>
                                                                </td>
                                                                <td>
                                                                    <p>App based access to the researchers, practitioners and patients ensures smooth patient – doctor coordination through remote patient monitoring.</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Data Collection and Management</td>
                                                                <td>
                                                                    <p>Highly decentralized data collection and management makes decision making time consuming which increases risks to patient, limits access to patient data, complicated and challenges in patient management.</p>
                                                                </td>
                                                                <td>
                                                                    <p>App based smart  digital interface ensure smooth data collection form all the stake holders (patient, Practitioners, researchers). The analytics engine consolidates and analyzes the data to provide smart insights and facilitates rapid timely decision making.</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
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
