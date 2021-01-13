import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Hightech extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Artificial Intelligence in Hi-Tech
                                    </h2>
                                    <p className="text-justify">In the last century, we greatly expanded the idea of what it means to be human. Remarkable innovations in science and technology brought us to the moon, laid the foundation of the Internet and cured many of the most pressing concerns that plagued us.
                                    </p>
                                    <hr />
                                    <h5 className="title my-3  wow fadeIn  font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        What’s next?
                                    </h5>
                                    <p className="text-justify ">To further explore our boundaries, we need the next generation of technologies that can read and write better than the most powerful tool we have—the human brain.</p>
                                    <hr />
                                    <h5 className="title mb-3 mt-3 wow fadeIn font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        Overview
                                    </h5>
                                    <p className="text-justify font-weight-bold">VisionAize is enabling the Hi-Tech industry through data and automation. Companies are vouching for data-driven services and are capturing their data sources for insightful decision-making. Hi-Tech companies are at the perfect stage where they can deploy various services through the aid of technology by integrating multiple services for operational efficiency.
                                    </p>
                                    <p className="text-justify">There are two fundamental dimensions as high-tech heads toward a deep digital reinvention. First, companies must deviate from asking, “How can we use what we know?” to examining and engineering: “What do we want to know?”</p>
                                    <div className="text-center mb-4" >
                                        <img alt="img" src="img/svg/hi-tech_img.svg" className="img-fluid" />
                                    </div>

                                    <h5 className="title mb-3 mt-5 wow fadeIn font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        Applications
                                    </h5>

                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Predictive Analytics</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Automation</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Enhancing Product development model</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Enhanced Security
                                        </li>
                                    </ul>


                                    <h5 className="title mb-3 mt-5 wow fadeIn font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        Use Cases
                                    </h5>

                                    <div className="row px-2">
                                        <div className="col-md-6 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Automation</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">The industry has multiple repetitive tasks which are now handled by Artificial Intelligence-based Robots which can repeat tasks with monotony and without any frauds.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Deploying Code</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">Faulty production code published on live can lead to various repercussions leading to a damaged reputation and loss in revenue. Artificial intelligence is a game-changer for Hi-tech companies as it can audit code, apply multiple checks and parameters to ensure the code is of good quality. </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Predictive Analytics</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">Hi-tech companies can leverage Predictive Analytics to provide an enhanced user experience to increase the churn rate of Hi-tech products and services. Predictive Analytics can provide detailed insights of user behaviour, preferences, interests, triggers, alerts, past interactions and help companies to make an informed decision</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Enhanced Security</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">It requires robust cloud security to avoid security breaches on the enterprise infrastructure. Artificial Intelligence provides Hi-tech enterprise with the possibility of robust security services which helps automated threat detection and quarantine. </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    <Link to={Links.SmartRiskPredictorAgileProcess}
                                        className="list-group-item list-group-item-action"> <i className="fas fa-check mr-2"></i>
                                        <span>Smart Risk Predictor for Agile
                                    Process</span></Link>
                                    <Link to={Links.SuccessThroughSprints} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Success through Sprints</span></Link>
                                    <Link to={Links.ImprovementThroughDeepLearning}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Improvement through deep learning</span></Link>
                                    <Link to={Links.BusinessModelMakeover} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>The business model makeover</span></Link>
                                    <Link to={Links.StayingAheadCurveWith} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Staying ahead of the curve with AI</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
