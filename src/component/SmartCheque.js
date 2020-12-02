import React, { Component } from 'react'

export default class SmartCheque extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5 case-studies_page">
                        <div className="container">

                            <div className="text-center my-4">
                                <img alt="img" src="img/svg/smart_cheque_process.svg" height="400" style={{ maxWidth: "100%" }} />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Client</p>
                                        <p className="text-justify">One of the largest Mutual Fund RTA with Regional centers spread over 1000 locations across the
                country.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Business Problem</p>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>The existing
                    process was from acquiring cheques to validation was completely manual to perform every
                    change of back account details request.

                </li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Customer
                    experience was a major issue for the investors.

                </li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>The manual
                    overload affected everyday productivity.

                </li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Solution

            </p>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>AI-Powered
                    check recognition solution that can scan photographs/scanned copies of checks online.


                </li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>The solution
                    validates account number and IFSC code from every IMPS transaction.


                </li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>The solution
                    required no manual intervention with completely automated workflow.


                </li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="col-md-12">

                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Business Benefits</p>
                                        <div className="row text-center d-flex justify-content-center mt-4">
                                            <div className="col-lg-4">
                                                <img alt="img" src="img/svg/012-system-1.svg" height="60px" />
                                                <h5 className="mt-4">Zero manual effort from customer side in processing

                    </h5>
                                            </div>
                                            <div className="col-lg-4">
                                                <img alt="img" src="img/svg/Icon metro-thumbs-up.svg" height="60px" />
                                                <h5 className="mt-4">Enhanced customer Experience

                    </h5>
                                            </div>
                                            <div className="col-lg-4">
                                                <img alt="img" src="img/svg/002-wallet-with-card-sticking-out.svg" height="60px" />
                                                <h5 className="mt-4">50% Cost Saving

                    </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                </main>
            </div >
        )
    }
}
