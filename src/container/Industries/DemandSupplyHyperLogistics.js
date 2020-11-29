import React, { Component } from 'react'

export default class DemandSupplyHyperLogistics extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5">


                        <div className="container">
                            <h2 className="title mb-5 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s" >Demand Supply for Hyper Logistics<span className="font-weight-light"></span></h2>
                            <div className="text-center my-4">
                                <img alt="img" src="img/svg/hyper_local_transport.svg" height="300" style={{ maxWidth: '100%' }} />
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Client</p>
                                <p className="text-justify">Hyper Local Transportation & Logistics Unicorn in Indonesia</p>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Business Problem</p>
                                <p className="text-justify">A major need for Hyper local transportation and logistics companies are to find real time demand and supply forecasting to ensure service availability and avoid surge pricing.</p>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Solution</p>
                                <p className="text-justify">A big data platform that harnesses the power of actionable real time stream and historical data through its cloud computing architecture to come up with a highly effective conditional probabilistic supply forecast model along with adaptive learning algorithms that demonstrate dramatically improved predictive accuracy (~ 90%).</p>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Business Benefits</p>
                                <p className="text-justify">Enhances financial efficiency through demand driven surge pricing.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
