/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class PopulationHealthcare extends Component {
    render() {
        return (
            <main>

                <section className="py-5 case-studies_page">
                    <div className="container">
                        <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Preventive Healthcare<span className="font-weight-light"></span></h2>
                        <div className="text-center my-4">
                            <img alt="img" src="img/svg/preventive_healthcare.svg" height="400" style={{ maxWidth: '100%' }} />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Client</p>
                                    <p>A health & wellness company in India</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Business Problem</p>
                                    <p>The specific health test lacks comprehensive interpretation of the test results, risk assessment and prediction and personalized recommendation.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Solution</p>
                                    <p>A comprehensive platform which analyses genomic, lifestyle and cognitive behavioral data to precisely predict individual health risk and engage users through personalized recommendations.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Business Benefits</p>
                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Health Risk Assessment</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Disease Susceptibility Prediction, Fitness & Nutritional Trait Analysis</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Personalized Prevention, Recommendation, Engagement & Gamification</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main >
        )
    }
}
