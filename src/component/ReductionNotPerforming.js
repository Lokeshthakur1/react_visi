import React, { Component } from 'react'

export default class ReductionNotPerforming extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5 case-studies_page">


                        <div className="container">
                            <h2 className="title mb-md-5 mb-2 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s" >Reduction of a Bank’s Non-Performing Assets<span className="font-weight-light"></span></h2>
                            <div className="blockquote bq-primary py-3">
                                <img alt="img" src="img/Images/causalitv_matrix.jpg" className=" w-100" />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">The Business Problem</p>
                                        <p className="text-justify">A bank with a high number of non-performing assets (NPA) and wanted to forecast to see if a new loan applicant was likely to be a defaulter or a non-defaulter.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Our Solution & Approach</p>
                                        <p className="font-weight-bold mt-3 mb-0">Cloud-based classification and forecasting platform
            </p>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Built an
                    algorithm which achieved a classification accuracy of 72%

                </li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Correlated the
                    data across multiple parameters of past borrowing patterns (employment etc.) to segment loan
                    applicants with various solution approaches

                </li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Causal Matrix and Impact evaluation used to provide real time scoring
                </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blockquote bq-primary">
                                        <p className="bq-title">Business Benefits</p>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                                className="font-weight-bold">Time-Saving:</span> Using Visionaize’s solution, the employees could identify & predict potential defaulters early in the cycle  </li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                                className="font-weight-bold">Increased Efficiency:</span> The employee was able to predict and prevent NPAs from occurring with early detections</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                                className="font-weight-bold">$ Savings:</span> With the early detection of defaulting behavior, they were able to prevent NPAs and reduce risk exposure</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                                className="font-weight-bold">Increased Throughput:</span> Reduction in NPAs made more funds available for earning interest and hence increased profits for the bank</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="blockquote bq-primary pt-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered box-table mb-3">
                                                        <thead className="blue-1 white-text">
                                                            <tr>
                                                                <th style={{ width: 200 }}>Tickets Analyzed</th>
                                                                <th>Years of Data Analyzed</th>
                                                                <th style={{ width: 200 }}>Input Attributes</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>500,000+</td>
                                                                <td>1+</td>
                                                                <td>18+</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered box-table mb-3">
                                                        <thead className="blue-1 white-text">
                                                            <tr>
                                                                <th style={{ width: 200 }}>Data Points</th>
                                                                <th>Reliability of Model</th>
                                                                <th style={{ width: 200 }}>$ Savings</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>9M+</td>
                                                                <td>72%</td>
                                                                <td>$1M+ / yr</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
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
