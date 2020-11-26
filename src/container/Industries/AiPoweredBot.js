/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class AiPoweredBot extends Component {
    render() {
        return (
               <main>

            <section class="py-5">
                <div class="container">
                        <h2 class="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">AI Powered BOT for Prospect Sourcing<span class="font-weight-light"></span></h2>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Business Problem</p>
                            <p>There is a need for qualification and categorization of prospects (inbound) from multiple channels (website, social media and mobile apps).</p>
    
                    </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Solution
    
                        </p>
                            <p>The solution is an AI powered multi-lingual conversational BOT to capture relevant data through intelligent  interaction and information dissemination as enquired by the customer along with human take-over as required. </p>
                    </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Business Benefits</p>

                            <ul class="list-group list-group-flush py-3">
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Manpower reduction in call centre operation. </li>
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Unification of lead generation [integrated with existing CRM]</li>
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Ease of information dissemination about new and upcoming products, taking feedback through surveys etc.</li>
                            </ul>
                     
                    </div>
    
                </div>
            </section>
    
        </main>
        )
    }
}
