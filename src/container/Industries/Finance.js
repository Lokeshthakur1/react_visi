import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class HumanResource extends Component {
    render() {
        return (
            <main>

                <section class="py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <section>
                                    <h2 class="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Finance <span class="font-weight-light"></span>
                                    </h2>
                                    <h4 class="title font-weight-bold my-3 wow fadeIn" data-wow-delay="0.2s">Contracts Data Mining (CDM)</h4>
                                    <p className="text-justify">Data mining of contract documents and enables 4-way matching (complementing "audits of the future"). It facilitates the Contract-Invoice Reconciliation and hence avoids Revenue Leakage due to consideration of wrong contract information such as price, validity period etc.</p>
                                    <hr />
                                    <h4 class="title my-3 wow fadeIn font-weight-bold" data-wow-delay="0.2s">Financial Statements Analyzer (FSA)</h4>
                                    <p className="text-justify">
                                        Provides real-time dynamic dashboards to the board and management to understand financial stability and the growth path of their organizations. It enables the following -
                                    </p>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Derive Insights by linking your P/L and B/S</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Data Mining from Financial Statements – What-If Simulation from Clustering, Classification and Regression to help auditors and budget allocation teams, P/L owners, etc.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>A/R, A/P and Spend Analytics</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Financial Dashboard/Cockpit from Financial Statements – for Financial Ratios, etc.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Financial Data Visualization – for Financial Ratios, Cash Blow, Trend Charts, etc</li>
                                    </ul>

                                </section>
                            </div>
                            {/* <div class="col-md-4">
                                <div class="list-group fanylist_group">
                                    <Link to={Links.EmployeeAttr} class="list-group-item list-group-item-action"> <i
                                        class="fas fa-check mr-2"></i> <span>Employee Attrition and Retain</span></Link>
                                    <Link to={Links.EmployeeEngagement} class="list-group-item list-group-item-action">
                                        <i class="fas fa-check mr-2"></i> <span>Employee Engagement</span></Link>
                                    <Link to={Links.EmployeeProductivity} class="list-group-item list-group-item-action">
                                        <i class="fas fa-check mr-2"></i> <span>Employee Productivity</span></Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
