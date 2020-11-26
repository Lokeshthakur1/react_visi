/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class CustomerSegmentation extends Component {
    render() {
        return (
            <main>

            <section class="py-5">
                <div class="container">
                        <h2 class="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Customer Segmentations<span class="font-weight-light"></span></h2>

                    <div class="blockquote bq-primary">
                        <p class="bq-title">Business Problem</p>
                        <p>Finding the appropriate group of customers / prospects suitable for different range of products for better conversion (new sales, up-sell & cross-sell)
                         </p>
    
                    </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Solution
    
                        </p>
                        <p>Customer Segmentation and Product Mapping based on Customer Profiling, Geo-location and Credit score. Customers will be segmented based on continuous, quasi-continuous and categorical factors. Measuring customer credit worthiness based on behavioural and lifestyle patterns.
                       </p>
                    </div>
                    <div class="blockquote bq-primary">
                        <p class="bq-title">Business Benefits</p>

                            <ul class="list-group list-group-flush py-3">
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>High conversion rate</li>
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Quick turnaround time</li>
                                <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Provides valuable inputs for new product conceptualization and design</li>
                            </ul>
                     
                    </div>
    
                </div>
            </section>
    
        </main>
         )
    }
}
