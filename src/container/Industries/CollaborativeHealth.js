/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class CollaborativeHealth extends Component {
    render() {
        return (
                 <main>

            <section class="py-5">
                <div class="container">
                        <h2 class="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Collaborative Healthcare<span class="font-weight-light"></span></h2>

                        <div class="blockquote bq-primary">
                            <p class="bq-title">Client</p>
                            <p>A large care provider in USA.</p>

                        </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Business Problem</p>
                            <p>Lack of collaboration between payers, providers, physicians and patients increases risk and cost of healthcare services and reduces efficiency. Lack of integration restricts holistic insights and predictions required for preventive capabilities.</p>
    
                    </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Solution
    
                        </p>
                            <p>A platform that provides an analytics, insights and care management solution for health plans, hospitals, providers and employers that is easy to use; delivers key insights into performance, risk, cost and utilization; and has predictive capabilities that guide early and targeted interventions to improve outcomes</p>
                    </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Business Benefits</p>
                        <p>
                            Increases effectiveness of healthcare system and physician adoption

                        </p>
                     
                    </div>
    
                </div>
            </section>
    
        </main>
        )
    }
}
