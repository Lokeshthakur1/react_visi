/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Banking extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        AI Transformation in <span className="font-weight-light">Banking & Finance</span>
                                    </h2>
                                    <h5 className="font-weight-bold my-3">Empowering the Banking and Financial Services with the power of AI-ML to excel the digital revolution</h5>
                                    <div className="text-center my-4">
                                        <img src="img/svg/banking&financial_img.svg" className="img-fluid" />
                                    </div>


                                    <h5 className="title mb-3 mt-5 wow fadeIn font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        Overview
                                    </h5>
                                    <p className="text-justify">VisionAize is transforming the way banks and financial institutions operate. AI-ML enabled systems can help the organizations in the BFSI sector to streamline the processes ranging from payments, credit decisions to quantitative and financial risk management.</p>

                                    <p className="text-justify">AI and ML can empower organizations with deepdive consumer insights and help take smarter decisions, realtime. </p>
                                    <p className="text-justify">So what are the varied possibilities of AI-ML in Banking and Financial industry? </p>

                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                            className="font-weight-bold">AI-Powered BOT for Prospect Sourcing:</span>Qualify and Categorize your inbound leads from across different marketing channels with AI powered multi-lingual conversational BOT. </li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                            className="font-weight-bold">Risk Assessment & Propensity Model:</span>Improve your lending economics and increase customer value with smart cross sell opportunity assessment and profitable customer selection. </li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                            className="font-weight-bold">Digital Outreach & Customer Engagement:</span>Run smart campaigns with DND policy compliance and reachout to the right audience based on Social Media / user data Profiling, targeted campaigning and consequent customer engagement. </li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                            className="font-weight-bold">Customer Segmentation:</span> Boost your conversion rate with Customer Profiling, Geo-location, behavioural and lifestyle patterns,  and Credit score based customer segmentation. Segmentation of the target audience is based on continuous, quasi-continuous and categorical factors allowing effective mapping of the right product offering with the right customer. </li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                            className="font-weight-bold">Reduction of a Bank’s Non-Performing Assets:</span> Using Visionaize’s AI-ML based solution analyses historic data of the borrower and can help in identifying & predicting potential defaulters early in the cycle and thus providing enough room for financial institutions to address potential NPAs well in advance. </li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                            className="font-weight-bold">Intelligent Process Automation:</span> Achieve higher profitability by Automating End-to-end and cross-functional processes including processing unstructured content thereby achieving a lean and efficient business process control. </li>
                                    </ul>
                                    <h5 className="title my-3 wow fadeIn  font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        APPLICATIONS
                                    </h5>

                                    <div className="row px-2">
                                        <div className="col-md-6 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0">Commercial Banking</h5>
                                                {/* <hr className="w-100" /> */}
                                                <ul className="list-group list-group-flush py-3">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Know your Customer (KYC)</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Anti- Money Laundering (AML)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3">
                                                <h5 className="mb-0">IT Infrastructure</h5>
                                                {/* <hr className="w-100" /> */}
                                                <ul className="list-group list-group-flush py-3 h-100">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Security Cyberlake</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Anti- Money Laundering (AML)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3">
                                                <h5 className="mb-0">Card/Payments Business</h5>
                                                {/* <hr className="w-100" /> */}
                                                <ul className="list-group list-group-flush py-3 h-100">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Transaction Frauds</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Collusion Frauds</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Real Time Targeting</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Credit Risk Scoring</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0">Retail Banking</h5>
                                                {/* <hr className="w-100" /> */}
                                                <ul className="list-group list-group-flush py-3">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Customer Churn Prediction</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Deposit Fraud</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Real Time Targeting</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="title my-3 wow fadeIn  font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">Key Areas where VisionAIez solutions can add value in your organization are:</h5>
                                    <div className="row px-2">
                                        <div className="col-md-12 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0">Client Experience</h5>
                                                {/* <hr className="w-100" /> */}
                                                <ul className="list-group list-group-flush py-3">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Identify which client is likely to avail specific products or services</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Deepen your relationships with customers</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Anticipate and Identify client needs </li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Precisely target offers</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0">Lending</h5>
                                                {/* <hr className="w-100" /> */}
                                                <ul className="list-group list-group-flush py-3">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Build more precise credit models</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Actively manage your client portfolio</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Lead in small business credit with advanced analytics</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Proactively intervene when clients experience financial stress</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Forecast losses more accurately</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0">Financial Markets</h5>
                                                {/* <hr className="w-100" /> */}
                                                <ul className="list-group list-group-flush py-3">
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Cut down back office costs related to process failures </li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Optimize trade execution and routing</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Match investment opportunities to potential investors</li>
                                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Get research reports to the right clients</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row wow px-2 mt-4 justify-content-center fadeIn" data-wow-delay="0.4s">
                                        <div className="text-left col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img alt="img" src="img/Images/risk_management.jpg"
                                                    className="img_bg" />
                                                <h6>Risk Assessment & Propensity Model <br /> <Link to={Links.RiskAssesment}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img alt="img" src="img/Images/degital_outreach.jpg" className="img_bg" />
                                                <h6>Digital Outreach & Customer Engagement<br /> <Link to={Links.DigitalOutreach}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row wow px-2 justify-content-center fadeIn" data-wow-delay="0.4s">
                                        <div className="text-left col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img alt="img" src="img/Images/npa.jpg" className="img_bg" />

                                                <h6>Reduction of a Bank’s Non-Performing Assets<br /> <Link to={Links.ReductionNotPerforming}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img alt="img" src="img/Images/customer_segment.jpg" className="img_bg" />

                                                <h6>Customer Segmentations<br /> <Link to={Links.CustomerSegmentation}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                                <section>
                                    <h5 className="title my-5 wow fadeIn text-center font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        Financial Services | Solution Implementation Expertise
                            </h5>

                                    <div className="tabnlist row">
                                        <div className="col-12 mb-3">
                                            <div className="list-group fanylist_group px-3">
                                                <div className="d-flex tabnlist_head mb-2 align-items-center">
                                                    <p className="mb-2 h5">Non Performing Asset Prediction Analysis
                                            </p>
                                                    <b className="font-weight-bold mb-2 ml-auto">$2M- $8M<br /><small>Est. ROI
                                                    Annually</small></b>

                                                </div>

                                                <p><b className="font-weight-bold mb-2">Business Problem: </b>

                                            Our client had an issue with Non Performing loans portfolio and was looking
                                            for a
                                            solution to identify and predict ”defaulters” earlier in the approval cycle.
                                        </p>
                                                <ul className="list-group list-group-flush py-2">
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Create analytics to
                                                    improve classification accuracy</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Provide real time scoring
                                                    based on casual matrix</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Correlated data across 9
                                                        Million data points to identify and predict defaulters early in the
                                                    cycle.</small>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="list-group fanylist_group px-3">
                                                <div className="d-flex tabnlist_head mb-2 align-items-center">
                                                    <p className="mb-2 h5">KYC/AML Custom On-Boarding</p>
                                                    <b className="font-weight-bold mb-2 ml-auto">$10M- $15M<br /><small>Est. ROI
                                                    Annually</small></b>
                                                </div>

                                                <p className="text-justify"><b className="font-weight-bold mb-2">Business Problem: </b>FinTech company leadership was looking to efficiently on-board customers to support its international expansion. Compliance with International KYC/ AML regulations is necessary to provide such information to international authorities, while keeping the brokerage license.</p>
                                                <ul className="list-group list-group-flush py-2">
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Identify possible behavior triggers to early identify and prevent inappropriate retail individuals to open account with the financial institution.</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Provide real time scoring based on casual matrix</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Identify additional aspects to improve user experience, and adoption</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <div className="list-group fanylist_group px-3">
                                                <div className="d-flex tabnlist_head mb-2 align-items-center">
                                                    <p className="mb-2 h5">AI-Powered Prospect Targeting.</p>
                                                    <b className="font-weight-bold mb-2 ml-auto">$12-20M<br /><small>Est. ROI
                                                    Annually</small></b>
                                                </div>

                                                <p className="text-justify"><b className="font-weight-bold mb-2">Business Problem: </b>FinTech company leadership was looking to efficiently on-board customers to support its international expansion. Compliance with International KYC/ AML regulations is necessary to provide such information to international authorities, while keeping the brokerage license.</p>
                                                <ul className="list-group list-group-flush py-2">
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Create a data model to focus on 10,000 best potential international customers that fit the Financial persona profile.</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Identify paths and patterns preceding to new account sign ups.</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Correlate social media channels with a goal to identify the best path to a net new customer acquisition.</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Extend the social media correlation to the data model to focus on 10,000 best potential customers</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <div className="list-group fanylist_group px-3">
                                                <div className="d-flex tabnlist_head mb-2 align-items-center">
                                                    <p className="mb-2 h5">Multi-Channel Churn</p>
                                                    <b className="font-weight-bold mb-2 ml-auto">$2M- $18M<br /><small>Est. ROI
                                                    Annually</small></b>
                                                </div>

                                                <p className="text-justify"><b className="font-weight-bold mb-2">Business Problem: </b>The client had a strategic effort to identify and targeting 10,000 potential customers, while optimizing marketing spend through its International expansion.</p>
                                                <ul className="list-group list-group-flush py-2">
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Create analytics to understand multiple paths to churn by combining data from call center, retail and social media.</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Provide better visibility in different paths to churn with focus on VIP customers.</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Improve predictability of a churn in VIP customers.</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Create an operating procedure to notify business retail branch leadership of a potential VIP customer churn.</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <div className="list-group fanylist_group px-3">
                                                <div className="d-flex tabnlist_head mb-2 align-items-center">
                                                    <p className="mb-2 h5">International Arbitrage Trading</p>
                                                    <b className="font-weight-bold mb-2 ml-auto">$15M- $25M<br /><small>Est. ROI
                                                    Annually</small></b>
                                                </div>

                                                <p className="text-justify"><b className="font-weight-bold mb-2">Business Problem: </b>Our client wanted to explore profitable opportunities in trading of digital assets through international arbitrage at over 500 global exchanges.</p>
                                                <ul className="list-group list-group-flush py-2">
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Create a data model that included 530 global digital asset exchanges.</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Enrich the model with 1170 digital assets and ingest the trading data real-time</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Identify trading opportunities in real-time and provide actionable visualizations and insight to the users.</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>



                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    {/* <Link to={Links.AiPoweredBot} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>AI Powered BOT for Prospect Sourcing</span></Link>
                                    <Link to={Links.RiskAssesment} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Risk Assessment & Propensity Model</span></Link>
                                    <Link to={Links.DigitalOutreach} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Digital Outreach & Customer Engagement</span></Link>
                                    <Link to={Links.CustomerSegmentation} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Customer Segmentations</span></Link>
                                    <Link to={Links.ReductionNotPerforming} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Reduction of a Bank’s Non-Performing Assets</span></Link> */}


                                    <Link to={Links.AiPoweredBot} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>AI Powered BOT for Prospect Sourcing</span></Link>
                                    <Link to={Links.SmartCheque} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Smart cheque processing</span></Link>
                                    <Link to={Links.EmailAutomation} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Email automation</span></Link>
                                    <Link to={Links.AiPoweredProcessing} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>AI powered document processing</span></Link>
                                    {/* <Link to={Links.ReductionNotPerforming} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Reduction of a Bank’s Non-Performing Assets</span></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
