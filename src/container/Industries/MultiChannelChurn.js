import React, { Component } from 'react'

export default class MultiChannelChurn extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5">


                        <div className="container">
                            <h2 className="title mb-5 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s" >Multi-Channel Churn<span className="font-weight-light"></span></h2>

                            <div className="blockquote bq-primary">
                                <p className="bq-title">Business Problem</p>
                                <p className="text-justify">Our client wanted to create a predictable business process to reduce churn in their VIP clientele by 40%</p>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Project Summary</p>

                                <ul className="list-group list-group-flush py-3">
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Create analytics to understand multiple paths to churn by combining data from call center, retail and social media.</li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Provide better visibility in different paths to churn with focus on VIP customers.</li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Improve predictability of a churn in VIP customers.</li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Create an operating procedure to notify business retail branch leadership of a potential VIP customer churn.</li>
                                </ul>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Estimated ROI</p>
                                <h4 className="font-weight-bold text-success mt-4 mb-0">$2M- $18M Estimated</h4> <p className="mt-0">Annually</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
