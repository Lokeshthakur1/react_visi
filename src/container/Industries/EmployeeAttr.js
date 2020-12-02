/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class EmployeeAttr extends Component {
    render() {
        return (
            <main>

                <section className="py-5 case-studies_page">
                    <div className="container">
                        <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Employee Attrition and Retain<span className="font-weight-light"></span></h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Client</p>
                                    <p>A large bank in USA.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Business Problem</p>
                                    <p>When an Employee quits, Organizations not only lose the employee but it can take weeks or months to ramp up a new employee, which can directly or indirectly impact the bottom line, both tangible and intangible ways.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Solution</p>
                                    <p>Our AI Solution helped the managers by predicting who might quit, but they also could identify why these people might quit. This information was provided anonymously to managers so they could reduce turnover risk factors and retain their people better.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Business Benefits</p>
                                    <p>Client was able to reduce the Attrition rate by 30% and also was able to build a better training plan to keep employees motivated and move up the ladder.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
