import React, { Component } from 'react'

export default class IntraCityFreightFlow extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5">


                        <div className="container">
                            <h2 className="title mb-5 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s" >Intra City Freight Flow Analysis<span className="font-weight-light"></span></h2>
                            <div className="text-center my-4">
                                <img alt="img" src="img/svg/freight traffic.svg" height="300" style={{ maxWidth: '100%' }} />
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Client</p>
                                <p className="text-justify">World Bank Group</p>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Business Problem</p>
                                <p className="text-justify">Urban cities being a ‘consumption centre’, there is considerable freight traffic causing congestion across different points in the city. There is a need for freight flow analysis and optimization for the policy makers to design for freight hubs and corridors to </p>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Solution</p>
                                <p className="text-justify">Analytics driven Smart Transport Framework providing real-time data collection [onboard GPS device, POS, in-vehicle sensor data etc.], transport planning and analysis (route optimization / rationalization), control and stakeholder engagement and management [Mobile Apps for drivers and commuters, passenger information
                                system, online booking etc.]</p>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Business Benefits</p>
                                <p className="text-justify">The Platform can bring down the daily commute time of people in the cities by 15-20 minutes every day at the same time making public transport safer and convenient by giving them access to real-time information and transaction features. </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
