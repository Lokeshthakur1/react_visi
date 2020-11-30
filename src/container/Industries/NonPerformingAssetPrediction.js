import React, { Component } from 'react'

export default class NonPerformingAssetPrediction extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5 case-studies_page">


                        <div className="container">
                            <h2 className="title mb-5 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s" >Non Performing Asset Prediction Analysis<span className="font-weight-light"></span></h2>
                            <div className="text-center mb-4">
                                <img alt="img" src="img/svg/npa's.svg" height="400" style={{ maxWidth: '100%' }} />
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Business Problem</p>
                                <p className="text-justify">Our client had an issue with Non Performing loans portfolio and was looking for a solution to identify and predict ”defaulters” earlier in the  approval cycle.</p>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Project Summary</p>

                                <ul className="list-group list-group-flush py-3">
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Create analytics to improve classification accuracy</li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Provide real time scoring based on casual matrix</li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Correlated data across 9 Million data points to identify and predict defaulters early in the cycle.</li>
                                </ul>
                            </div>
                            <div className="blockquote bq-primary">
                                <p className="bq-title">Estimated ROI</p>
                                <h4 className="font-weight-bold text-success mt-4 mb-0">$2M- $8M Estimated</h4> <p className="mt-0">Annually</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
