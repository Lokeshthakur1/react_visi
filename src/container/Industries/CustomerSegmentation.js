/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class CustomerSegmentation extends Component {
    render() {
        return (
            <main>
                <section className="py-5 case-studies_page">
                    <div className="container">
                        <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Customer Segmentations<span className="font-weight-light"></span></h2>
                        <div className="text-center my-4">
                            <img src="img/svg/customer_segmentation.svg" height="400" style={{ maxWidth: '100%' }} />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Business Problem</p>
                                    <p>Finding the appropriate group of customers / prospects suitable for different range of products for better conversion (new sales, up-sell & cross-sell)</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Solution</p>
                                    <p>Customer Segmentation and Product Mapping based on Customer Profiling, Geo-location and Credit score. Customers  will be segmented based on continuous, quasi-continuous and categorical factors. Measuring customer credit  worthiness based on behavioural and lifestyle patterns.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blockquote bq-primary">
                                    <p className="bq-title">Business Benefits</p>
                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>High conversion rate</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Quick turnaround time</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Provides valuable inputs for new product conceptualization and design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
