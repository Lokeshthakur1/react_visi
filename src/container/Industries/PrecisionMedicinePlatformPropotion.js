import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class PrecisionMedicinePlatformPropotion extends Component {
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
                                        <br /><small>FUNIQUE PROPOSITION</small>
                                    </h2>
                                    <div className="row">


                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg p-3">

                                                <table className="table table-bordered box-table">
                                                    <thead className="blue-1 white-text">
                                                        <tr>
                                                            <th style={{ width: '50%' }}>INDUSTRY CHALLENGE</th>
                                                            <th>SOLUTION</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Success rate of the available therapy for  Diabetic-Macular-Edema is heterogeneous and not optimize.</td>
                                                            <td>Score based precision medicine solution for therapy of  DME</td>
                                                        </tr>
                                                        <tr>
                                                            <td>&gt; 40% failure rate in Anti-VEGF therapy for DME</td>
                                                            <td>Personalized therapeutic approach </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Patient Adherence & Monitoring</td>
                                                            <td>In-expensive  and can be used at the  point of care</td>
                                                        </tr>
                                                        <tr>
                                                            <td>No precision medicine biomarker available for the Diabetic-Macular-Edema.</td>
                                                            <td>Cloud based solution and be used through handheld devices like mobile phone/ laptops</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>


                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

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
