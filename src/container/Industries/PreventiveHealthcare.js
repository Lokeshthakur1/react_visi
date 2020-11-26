/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class PopulationHealthcare extends Component {
    render() {
        return (
                 <main>

            <section class="py-5">
                <div class="container">
                        <h2 class="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Preventive Healthcare<span class="font-weight-light"></span></h2>

                        <div class="blockquote bq-primary">
                            <p class="bq-title">Client</p>
                            <p>A health & wellness company in India</p>

                        </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Business Problem</p>
                            <p>The specific health test lacks comprehensive interpretation of the test results, risk assessment and prediction and personalized recommendation.</p>
    
                    </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Solution
    
                        </p>
                            <p>A comprehensive platform which analyses genomic, lifestyle and cognitive behavioral data to precisely predict individual health risk and engage users through personalized recommendations.</p>
                    </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Business Benefits</p>
                            <ul class="list-group list-group-flush py-3">
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Health Risk Assessment</li>
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Disease Susceptibility Prediction, Fitness & Nutritional Trait Analysis</li>
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Personalized Prevention, Recommendation, Engagement & Gamification</li>
                                
                            </ul>
                     
                    </div>
    
                </div>
            </section>
    
        </main>
        )
    }
}
