/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class EmployeeProductivity extends Component {
    render() {
        return (
                 <main>

                <section className="py-5 case-studies_page">
                <div className="container">
                        <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Employee Productivity<span className="font-weight-light"></span></h2>
                        <div className="blockquote bq-primary">
                            <p className="bq-title">Client</p>
                            <p>A Software Company, with global offices.</p>

                        </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Problem</p>
                            <p>Client was looking at a solution to increase the productivity of their Software Engineering workforce and reduce the number of issues and bugs being reported by testing teams and customers.</p>
    
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Solution
    
                        </p>
                            <p>Our AI Solution helped the client identify the trends and motivational factors of high performing employees. We had also identified which Surveys and their frequency were able to provide deeper context of the responses. A key factor identified by solution was related to inter team communication and collaboration.</p>
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Benefits</p>

                            <p>Client was able to increase the Employee productivity by introducing new training programs related to communication and collaboration tools. They started seeing an improvement in reduction of the number of bugs being reported and also better inter team collaboration. </p>
                     
                    </div>
    
                </div>
            </section>
    
        </main>
        )
    }
}
