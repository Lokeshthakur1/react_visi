/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class PopulationHealthcare extends Component {
    render() {
        return (
                 <main>

            <section className="py-5">
                <div className="container">
                        <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Population Healthcare<span className="font-weight-light"></span></h2>
                        <div className="text-center my-4">
                            <img alt="img" src="img/svg/popullation_health.svg" height="400" style={{maxWidth:'100%'}} />
                        </div>
                        <div className="blockquote bq-primary">
                            <p className="bq-title">Client</p>
                            <p>A large pharma company in USA.</p>

                        </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Problem</p>
                            <p>There is a need for data-driven quality improvement program offers educational activities to help meet the requirements for professional certification and CMS Quality Payment Program incentives.</p>
    
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Solution
    
                        </p>
                            <p>The solution is a population health and quality improvement initiative that implements a simple and effective approach to educate and motivate physicians to improve vaccination rates in their practice.</p>
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Benefits</p>
                            <p>Enable clinicians to better understand their own performance compared with that of their colleagues (state and national payer benchmark) in vaccinating elderly patients and those at high risk of pneumococcal infection via an individualized Clinical Performance Dashboard.</p>
                     
                    </div>
    
                </div>
            </section>
    
        </main>
        )
    }
}
