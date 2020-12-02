import React, { Component } from 'react'

export default class InternationalArbitrageTrading extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5 case-studies_page">

                        <div className="container">
                            <h2 className="title mb-5 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s" >International Arbitrage Trading<span className="font-weight-light"></span></h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Business Problem</p>
                                        <p className="text-justify">Our client wanted to explore profitable opportunities in trading of digital assets through international arbitrage at over 500 global exchanges.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Project Summary</p>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Create a data model that included 530 global digital asset exchanges.</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Enrich the model with 1170 digital assets and ingest the trading data real-time</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Identify trading opportunities in real-time and provide actionable visualizations and insight to the users.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Estimated ROI</p>
                                        <h4 className="font-weight-bold text-success mt-4 mb-0">$15M- $25M Estimated</h4> <p className="mt-0">Annually</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
