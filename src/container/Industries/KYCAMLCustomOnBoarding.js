import React, { Component } from 'react'

export default class KYCAMLCustomOnBoarding extends Component {
    render() {
        return (
            <div>
                <main>
                    <section className="py-5 case-studies_page">
                        <div className="container">
                            <h2 className="title mb-md-5 mb-2 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s" >KYC/AML Custom On-Boarding<span className="font-weight-light"></span></h2>
                            <img alt="img" src="img/svg/KYC_AMLCUSTO ONBOARDING.svg" className="w-100" />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Business Problem</p>
                                        <p className="text-justify">FinTech company leadership was looking to efficiently on-board customers to support its international expansion. Compliance with International KYC/ AML regulations is necessary to provide such information to international authorities, while keeping the brokerage license. </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Project Summary</p>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Create KYC/AML on-boarding integration to support international expansion efforts.</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Identify possible behavior triggers to early identify and prevent inappropriate retail individuals to open account with the financial institution.</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Identify additional aspects to improve user experience, and adoption</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Estimated ROI</p>
                                        <h4 className="font-weight-bold text-success mt-4 mb-0">$10M- $15M Estimated</h4> <p className="mt-0">Annually</p>
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
