import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class HumanResource extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-8">
                                <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                    Finance <span className="font-weight-light"></span>
                                </h2>


                                <div className="text-center  pb-4 ">
                                    <img alt="img" src="img/Images/AI Solutions in Financial Services.jpg" className="img-fluid  py-4" />
                                </div>

                                <h4 className="title font-weight-bold my-3 wow fadeIn" data-wow-delay="0.2s">Contracts Data Mining (CDM)</h4>
                                <p className="text-justify">Data mining of contract documents and enables 4-way matching (complementing "audits of the future"). It facilitates the Contract-Invoice Reconciliation and hence avoids Revenue Leakage due to consideration of wrong contract information such as price, validity period etc.</p>
                                {/* <hr /> */}

                                <h4 className="title my-3 wow fadeIn font-weight-bold" data-wow-delay="0.2s">Financial Statements Analyzer (FSA)</h4>
                                <p className="text-justify">
                                    Provides real-time dynamic dashboards to the board and management to understand financial stability and the growth path of their organizations. It enables the following -
                                </p>
                                <div className="my-4 pb-4 blockquote bq-primary">
                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Derive Insights by linking your P/L and B/S</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Data Mining from Financial Statements – What-If Simulation from Clustering, Classification and Regression to help auditors and budget allocation teams, P/L owners, etc.</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>A/R, A/P and Spend Analytics</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Financial Dashboard/Cockpit from Financial Statements – for Financial Ratios, etc.</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Financial Data Visualization – for Financial Ratios, Cash Blow, Trend Charts, etc</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.NonPerformingAssetPrediction} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Non Performing Asset Prediction Analysis</span></Link>
                                    <Link to={Links.KYCAMLCustomOnBoarding} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>KYC/AML Custom On-Boarding</span></Link>
                                    <Link to={Links.AIPoweredProspectTargeting} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>AI-Powered Prospect Targeting</span></Link>
                                    <Link to={Links.MultiChannelChurn} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Multi-Channel Churn</span></Link>
                                    <Link to={Links.InternationalArbitrageTrading} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>International Arbitrage Trading</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
