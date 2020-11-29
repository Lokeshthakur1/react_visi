/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class AiPoweredProcessing extends Component {
    render() {
        return (
            <main>

            <section className="py-5">
                <div className="container">
                        <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">AI powered form processing<span className="font-weight-light"></span>
                        </h2>
                    <div className="text-center my-5">
                            <img alt="img" src="img/svg/ai_form.svg" height="400" style={{maxWidth:'100%'}}/>
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Client</p>
                        <p >One of the largest Mutual Fund RTA with Regional centers spread over 1000 locations across the
                            country.
    
                        </p>
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Problem</p>
                        <ul className="list-group list-group-flush py-3">
                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>The forms were
                                handwritten which made automation difficult.
                            </li>
                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>The forms were
                                unstructured and had innumerable formats.
                            </li>
                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>There was no
                                control over incoming formats.
                            </li>
                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>The print
                                quality of the forms were poor which affected the scan quality as well.</li>
                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>The volume of
                                processed each day varies heavily and hence predicting volume and staffing was a challenge.
                            </li>
                        </ul>
    
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Solution
    
                        </p>
                        <ul className="list-group list-group-flush py-3">
                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Implemented an
                                AI-Based Handwriting Recognition Algorithm.
    
                            </li>
                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Implemented a
                                powerful deep learning platform.
    
                            </li>
                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Implemented a
                                Cloud-Based scalable solution.
    
                            </li>
                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>The platform
                                achieved 95% accuracy on handwriting recognition.
                            </li>
                        </ul>
                    </div>
                    <div className="blockquote bq-primary">
                        <p className="bq-title">Business Benefits</p>
                        <div className="row text-center d-flex justify-content-center mt-4">
                            <div className="col-lg-3 mb-5">
                                <img alt="img" src="img/svg/012-system-1.svg" height="60px"/>
                                <h5 className="my-4">Scalable Automation
                                </h5>
                            </div>
                            <div className="col-lg-3 mb-5">
                                <img alt="img" src="img/svg/019-analytics.svg" height="60px"/>
                                <h5 className="my-4">70% manual effort reduced Improved Productivity
                                </h5>
                            </div>
                            <div className="col-lg-3 mb-5">
                                <img alt="img" src="img/svg/001-resize.svg" height="60px"/>
                                <h5 className="my-4">TAT reduced from days to hours
    
                                </h5>
                            </div>
                            <div className="col-lg-3 mb-5">
                                <img alt="img" src="img/svg/002-wallet-with-card-sticking-out.svg" height="60px"/>
                                <h5 className="my-4">50% Cost Saving
    
                                </h5>
                            </div>
                        </div>
                    </div>
    
                </div>
            </section>
    
        </main>
        )
    }
}
