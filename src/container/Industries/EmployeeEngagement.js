/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class EmployeeEngagement extends Component {
    render() {
        return (
                 <main>

                <section className="py-5 case-studies_page">
                <div className="container">
                        <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Employee Engagement<span className="font-weight-light"></span></h2>
                        <div className="blockquote bq-primary">
                            <p className="bq-title">Client</p>
                            <p>A large Retailer with Online and Stores, selling electronics and household appliances.</p>

                        </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Problem</p>
                            <p>Client was looking at a solution to increase the engagement of their Sales workforce in the stores. They wanted to create a competitive edge compared to Online Retailers with their workforce and providing personalized experience for their customers.</p>
    
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Solution
    
                        </p>
                            <p>Our AI Solution helped the client identify the trends and motivational factors of high performing employees. We had also identified which Surveys and their frequency were able to provide deeper context and emotional quotient of the responses. Also Social Media data was analyzed to identify an grievances or a bad day.</p>
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Benefits</p>

                            <p>Client was able to increase the Employee engagement at their stores and Online Customer Support personnel based on the analyzed Survey, Social Media and other relevant data that was analyzed and the insights and Recommendations provided by our solution. </p>
                     
                    </div>
    
                </div>
            </section>
    
        </main>
        )
    }
}
