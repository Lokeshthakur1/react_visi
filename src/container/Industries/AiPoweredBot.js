/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class AiPoweredBot extends Component {
    render() {
        return (
               <main>

                <section className="py-5 case-studies_page">
                <div className="container">
                        <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">AI Powered BOT for Prospect Sourcing<span className="font-weight-light"></span></h2>

                        <div className="text-center my-4">
                            <img alt="img" src="img/svg/ai_bot_prospact_sourcing.svg" height="400" style={{maxWidth:'100%'}}/>
                        </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Problem</p>
                            <p>There is a need for qualification and categorization of prospects (inbound) from multiple channels (website, social media and mobile apps).</p>
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Solution
    
                        </p>
                            <p>The solution is an AI powered multi-lingual conversational BOT to capture relevant data through intelligent  interaction and information dissemination as enquired by the customer along with human take-over as required. </p>
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Benefits</p>

                            <ul className="list-group list-group-flush py-3">
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Manpower reduction in call centre operation. </li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Unification of lead generation [integrated with existing CRM]</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Ease of information dissemination about new and upcoming products, taking feedback through surveys etc.</li>
                            </ul>
                     
                    </div>
    
                </div>
            </section>
    
        </main>
        )
    }
}
