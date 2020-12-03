import React, { Component } from 'react'

export default class SmartTransportSolution extends Component {
    render() {
        return (
            <div>
                <main>
                    <section className="py-5 case-studies_page">
                        <div className="container">
                            <h2 className="title mb-md-5 mb-2 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s" >Smart Transport Solutions<span className="font-weight-light"></span></h2>
                            <div className="text-center mb-4">
                                <img alt="img" src="img/svg/public_transport_solution.svg" height="400" style={{ maxWidth: '100%' }} />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Client</p>
                                        <p className="text-justify">3 Metro Cities in India</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Business Problem</p>
                                        <p className="text-justify">Lack of multi-modal interoperability and real time visibility of public transport to the commuters and controlling authorities [transport operators] results in gross inefficiency in transport planning and management.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Solution</p>
                                        <p className="text-justify">Analytics driven Smart Transport Framework providing real-time data collection [onboard GPS device, POS, in-vehicle sensor data etc.], transport planning and analysis (route optimization / rationalization), control and stakeholder engagement and management [Mobile Apps for drivers and commuters, passenger information system, online booking etc.]</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Business Benefits</p>
                                        <p className="text-justify">The Platform can bring down the daily commute time of people in the cities by 15-20 minutes every day at the same time making public transport safer and convenient by giving them access to real-time information and transaction features. </p>
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
