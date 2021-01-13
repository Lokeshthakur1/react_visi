/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Utility extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Utility
                            </h2>
                                    <div className="mb-4 text-center">
                                        <img alt="img" src="img/svg/utility.svg" className="img-fluid" height="400" />
                                    </div>
                                    <h5 className="font-weight-bold my-3">Experience Intelligent Demand Forecasting with the power of AI and ML</h5>
                                    <p className="text-justify">Smart Demand Forecasting can help businesses Reduce the utility costs with accurate production & distribution capacity planning. VisionAIze can help you identify peak hours, essential and non-essential distribution areas and optimize the operating expenses.   </p>
                                    <p className="text-justify">With AI-ML driven Demand Forecasting technologies, eliminate the operational challenges and supply chain scope creeps from your utility demand. </p>
                                    <p className="text-justify">Upgrade to an efficient business process</p>

                                    <h5 className="title mb-3 mt-5 wow fadeIn  font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">OVERVIEW</h5>

                                    <p className="text-justify">We aim to Make every utility a strategic asset for the organization. </p>
                                    <p className="text-justify">VisionAize accelerates how enterprises transform tons of data into a decision-making platform for busy and stressed engineers, behind the scenes.</p>
                                    <p className="text-justify">VisionAize is an objective-tailored platform for AI applications that targets industry and company-specific use cases. It offers a cohesive development environment with a concise and comprehensive set of tools and services to design, build, deploy and operate advanced enterprise-scale AI applications.</p>

                                    <div className="row">
                                        <div className="col-md-12 my-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="font-weight-bold p-3">How VisionAize can transform your utility management?</h5>
                                                <ul className="list-group list-group-flush py-3">
                                                    <li className="list-group-item">
                                                        <span className="pr-4"><i className="fas fa-check"></i></span>
                                                        <b>Effective Load Control Mechanism helps in attaining higher margins.</b><br />
                                                        Timely & accurate predictions about the utility demand can help you cut down costs by reducing wastage and misuse. An efficient supply chain where you Produce, Distribute and consume only what is needed.
                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="pr-4"><i className="fas fa-check"></i></span>
                                                        <b>Improved profitability with predictive analysis of peak demand hours.</b><br />
                                                        Be efficient with the operational planning and reduce Procurement Costs with advanced analysis and forecasting of the utility demand.

                                                    </li>
                                                    <li className="list-group-item">
                                                        <span className="pr-4"><i className="fas fa-check"></i></span>
                                                        <b>Decrease Compliance Cost, plan Load Control Events and grow seamlessly.</b><br />
                                                        With VisionAIze, you are monitoring and controlling the performance of your utility in automation. Reduce power outages on the customer side, minimal interruptions, competitive utility costs and advanced demand assessment reporting.

                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                        <p>Let VisionAIze AI engine revolutionize your utility demand and supply chain with efficiency.
</p>


                                    </div>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    <Link to={Links.IntelligentDemandForecast} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Intelligent Demand Forecast</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
