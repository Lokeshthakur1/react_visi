/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class RetailCaseStudies extends Component {
    render() {
        return (
            <main>
                <section className="py-5 case-studies_page">
                    <div className="container">
                        <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Retail Case Studies<span className="font-weight-light"></span></h2>
                        <div className="text-center my-4">
                            <img alt="img" src="img/svg/stores_.svg" height="400" style={{ maxWidth: '100%' }} />
                        </div>
                        <div className="blockquote bq-primary">
                            <p className="bq-title">Company</p>
                            <p>American multinational office supply retailing corporation, with over 3,000 stores worldwide in 26 countries.</p>

                        </div>

                        <div className="blockquote bq-primary">
                            <p className="bq-title">System</p>
                            <p>Staples Enterprise Promotion Platform (EPP) – a platform developed internally to create and manage promos across SKUs used by promo managers</p>
                        </div>
                        <div className="blockquote bq-primary">
                            <p className="bq-title">Problem</p>
                            <ul className="list-group list-group-flush py-3">
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Current profitability report is static and clumsy with no drill downs from promo to SKU level</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>No predictions or prescriptions</li>

                            </ul>
                        </div>
                        <div className="blockquote bq-primary">
                            <p className="bq-title">Solution</p>
                            <ul className="list-group list-group-flush py-3">
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Dynamic dashboards for promo managers with drill down to granular levels</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Suggestive negotiation with vendor while creating promos that require vendor funding</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Suggest promos based on available inventory count and environmental driver details</li>
                            </ul>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered box-table">
                                <thead className="blue-1 white-text">
                                    <tr>
                                        <th scope="col">Marketing</th>
                                        <th scope="col">Merchandising</th>
                                        <th scope="col">Vendor Management</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <ul className="listFinancial_services">
                                                <li><i className="fas fa-check pr-2"></i>Market basket analysis</li>
                                                <li><i className="fas fa-check pr-2"></i>Promo mix modeling</li>
                                                <li><i className="fas fa-check pr-2"></i>Optimizing discount offering</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="listFinancial_services">
                                                <li><i className="fas fa-check pr-2"></i>Assortment optimization</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="listFinancial_services">
                                                <li><i className="fas fa-check pr-2"></i>Automation of vendor’s approval on product discount offering </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p><b>Case Details:</b> Different Levels of Analysis</p>
                        <div className="table-responsive">
                            <table className="table table-bordered box-table">
                                <thead className="blue-1 white-text">
                                    <tr>
                                        <th style={{ width: 250 }}>Descriptive</th>
                                        <th> Diagnostic</th>
                                        <th> Predictive</th>
                                        <th style={{ width: 250 }}> Prescriptive</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            What Happened?
                                    </td>
                                        <td>
                                            Why Did it happen?
                                    </td>
                                        <td>
                                            What will happen?
                                    </td>
                                        <td>
                                            How can I make it happen?
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Standard reports/dashboards:</b>
                                            <ul className="listFinancial_services">
                                                <li><i className="fas fa-check pr-2"></i>Historical distribution of sales by promo</li>
                                                <li><i className="fas fa-check pr-2"></i>Historical distribution of margin by promo</li>
                                                <li><i className="fas fa-check pr-2"></i>Forecasted sales vs. actual sales</li>
                                            </ul>
                                        </td>
                                        <td>
                                            Comparing expected unprofitable but actual profitable promos
                                    </td>
                                        <td>
                                            What is the dollar value lift can be achieved by changing the price discount or removing some SKUs or adding some SKUs to a promo bucket
                                    </td>
                                        <td>
                                            <ul className="listFinancial_services">
                                                <li><i className="fas fa-check pr-2"></i>Set and respond to triggers for timely actions</li>
                                                <li><i className="fas fa-check pr-2"></i>Evaluate true profitability by tracking vendor funded coupon receivables, Cost to serve, Voluminous SKUs, Long Lead SKUs</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
