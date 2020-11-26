/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class RiskAssesment extends Component {
    render() {
        return (
                 <main>

            <section class="py-5">
                <div class="container">
                        <h2 class="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Risk Assessment & Propensity Model<span class="font-weight-light"></span></h2>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Business Problem</p>
                            <p>There is a need for qualification and categorization of prospects (inbound) from multiple channels (website, social media and mobile apps).</p>
    
                    </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Solution
    
                        </p>
                            <p>Computing credit worthiness  & propensity to cross-sell for potential borrowers, with/without standard credit rating, analysing individual’s traditional and non-traditional data</p>
                    </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Business Benefits</p>

                            <ul class="list-group list-group-flush py-3">
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Quick decision making [in minutes]</li>
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Improved loan economics and cross-sell  </li>
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Wide spectrum of borrowers
</li>
                            </ul>
                     
                    </div>
    
                </div>
            </section>
    
        </main>
        )
    }
}
