import React, { Component } from 'react'

export default class DecisionSupports extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5">
                        <div className="container">
                            <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Decision support for Hospitals <span className="font-weight-light"></span></h2>
                            <div className="text-center my-4">
                                <img alt="img" src="img/svg/DECISIONSupport_hospital.svg" height="400" style={{ maxWidth: '100%' }} />
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Client</p>
                                <p>Multiple Hospitals in India
            </p>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Business Problem
            </p>
                                <p className="text-justify">Hospital operations generates data from heterogeneous sources and needs unified approach for
                                generating data driven decisions and predictive action items.

            </p>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Solution

            </p>
                                <p className="text-justify">A platform for heterogeneous data collection, collation and unification for generating actionable
                                insights, predictions (bed occupancy, epidemic and pandemic alerts etc.) and optimization (cost
                                of packages, inventory etc.)



            </p>
                            </div>

                            <div className="blockquote bq-primary">
                                <p className="bq-title">Business Benefits

            </p>
                                <p className="text-justify">Increased operational efficiency
                                Preparedness to handle epidemic and pandemic situations
                                Better patient service and satisfaction


            </p>
                            </div>

                        </div>
                    </section>

                </main>
            </div>
        )
    }
}
