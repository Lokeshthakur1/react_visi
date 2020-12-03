/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class RiskAssesment extends Component {
    render() {
        return (
                 <main>

                <section className="py-5 case-studies_page">
                <div className="container">
                        <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Risk Assessment & Propensity Model<span className="font-weight-light"></span></h2>

                        <div className="text-center py-3 mb-4">
                            <img alt="img" src="img/Images/riskAssesmentAndPropensity.jpg" className="img-fluid w-100"/>
                        </div>

                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Problem</p>
                            <p>There is a need for qualification and categorization of prospects (inbound) from multiple channels (website, social media and mobile apps).</p>
    
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Solution
    
                        </p>
                            <p>Computing credit worthiness  & propensity to cross-sell for potential borrowers, with/without standard credit rating, analysing individual’s traditional and non-traditional data</p>
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Benefits</p>

                            <ul className="list-group list-group-flush py-3">
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Quick decision making [in minutes]</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Improved loan economics and cross-sell  </li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Wide spectrum of borrowers
</li>
                            </ul>
                     
                    </div>
    
                </div>
            </section>
    
        </main>
        )
    }
}
