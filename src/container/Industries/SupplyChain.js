/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class SupplyChain extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Supply Chain<span className="font-weight-light"></span></h2>
                        <div className="text-center my-4">
                            <img src="img/svg/supplychain1.svg" className="img-fluid" />
                        </div>
                        <div className="row px-2">
                            <div className="col-md-12 px-2">
                                <div className="list-group card shadow-lg mb-3">
                                    <h4 className="title my-3 wow fadeIn px-3 font-weight-bold" data-wow-delay="0.2s">Supply Chain Diagnosis</h4>
                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Club the value drivers along with trained models crafted out of continuous learning​​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Build a consultative model for problem solving including predictive and prescriptive analytics​​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Target the value drivers and articulate benefits​​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>A holistic assessment should be applied covering both operation and Innovation excellence parameters</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 px-2">
                                <div className="list-group card shadow-lg mb-3">
                                    <h4 className="title my-3 wow fadeIn px-3 font-weight-bold" data-wow-delay="0.2s">Supply Chain Maturity</h4>
                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Understand the current state of Supply Chain maturity by deep dive of Customer, Vendor, Geography, Facilities and Logistic Master Data elements​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Deep dive of Factory level transactional data including Plant and Line​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Identify pain points, issues, problem indicators and build an alignment on Value Drivers for the Organization​</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 px-2">
                                <div className="list-group card shadow-lg mb-3">
                                    <h4 className="title my-3 wow fadeIn px-3 font-weight-bold" data-wow-delay="0.2s">Supply Chain Optimization</h4>
                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Application of key enablers including warehousing, inventory, delivery and distribution​​​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Implement a blend of AI and analytics along with IoT and analytics​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Define and measure monetization criterion​​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Continuous Improvement with feedback and learning models​ </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 px-2">
                                <div className="list-group card shadow-lg mb-3">
                                    {/* <h4 className="title my-3 wow fadeIn px-3 font-weight-bold" data-wow-delay="0.2s">Supply Chain Optimization</h4> */}
                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Consultative approach to solve Supply Chain problems​-Spend classification, vendor matching, capturing supplier or market data and  anomaly detection​​​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Operational and Innovation Excellence framework for Supply chain​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>24x7 follow the sun Supply Chain cycle​</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Agile and modular Supply Chain service approach</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-3">
                        <h4 className="font-weight-bold">Procure to Pay Anomaly Detection</h4>
                        <ul className="nav nav-tabs  md-tabs mt-3 box-tab" id="myTabJust" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link px-4 active" id="1" data-toggle="tab" href="#businessProblem" role="tab"
                                    aria-controls="health" aria-selected="true">BUSINESS PROBLEM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-4" id="2" data-toggle="tab" href="#aiApproch" role="tab"
                                    aria-controls="banking" aria-selected="false">AI APPROACH</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-4" id="2" data-toggle="tab" href="#BusinessBenifit" role="tab"
                                    aria-controls="banking" aria-selected="false">BUSINESS BENEFITS</a>
                            </li>
                        </ul>
                        <div className="tab-content card shadow-lg mb-5" id="myTabContentJust">
                            <div className="tab-pane fade show active" id="businessProblem" role="tabpanel" aria-labelledby="1">
                                <div class="row align-items-center p-4">
                                    <div class="col-md-12">
                                        <h4 className="font-weight-bold mb-3">BUSINESS PROBLEM</h4>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Due to multiple acquisitions and non-standardized processes across locations, this organization faced challenges in its Finance & Accounting process with leakages and other P2P risks</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Clients data was located across 4 different ERP systems with cross platform anomalies including leakages and master data issues</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Client was facing high volume of leakages and process risks, and using a third party service provider for periodic audits of the data. The recovery costs were high due to lack of pre-emptive detection​</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="aiApproch" role="tabpanel" aria-labelledby="2">
                                <div class="row align-items-center p-4">
                                    <div class="col-md-12">
                                        <h4 className="font-weight-bold mb-3">AI APPROACH</h4>
                                        <p className="text-justify">Our team did the Anomaly Detection models for Procure to Pay that indicate whether a payment is anomalous</p>
                                        <p className="text-justify">In addition to business rules, Machine Learning is used for pattern recognition and identifying previously unknown anomaly types.</p>
                                        <p className="text-justify">Predictive scoring is used reduce false positives and feedback from investigations is used to improve prediction accuracy over time</p>
                                        <ul className="list-group list-group-flush py-3">
                                            <h5>Detection models include:</h5>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Duplicate payments</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Wrong vendor payments</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Payment penalties</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Discrepancies between PO & invoice</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Shell vendors</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Suspicious invoice patterns</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Suspicious approval patterns</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Pricing anomalies</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>One time vendor anomalies</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="BusinessBenifit" role="tabpanel" aria-labelledby="2">
                                <div class="row align-items-center p-4">
                                    <div class="col-lg-12">
                                        <h4 className="font-weight-bold mb-3">BUSINESS BENEFITS</h4>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Pre-emptive detection of leakages </li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Reduced recovery costs by &gt;95%</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Improved audit process by shifting from sample-based audits to data-driven audits and 100% surveillance </li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Higher process efficiency by reduced back office quality control checks and targeted investigation efforts</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Identified errors and anomalies previously unseen in near real time</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="font-weight-bold">Product Information Extraction</h4>
                        <p>Reduced cycle time for each product from 45 minutes to 10 minutes, for a Large Manufacturing Company</p>
                        <ul className="nav nav-tabs  md-tabs mt-3 box-tab" id="myTabJust" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link px-4 active" id="1" data-toggle="tab" href="#businessProblem" role="tab"
                                    aria-controls="health" aria-selected="true">BUSINESS PROBLEM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-4" id="2" data-toggle="tab" href="#aiApproch" role="tab"
                                    aria-controls="banking" aria-selected="false">AI APPROACH</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-4" id="2" data-toggle="tab" href="#BusinessBenifit" role="tab"
                                    aria-controls="banking" aria-selected="false">BUSINESS BENEFITS</a>
                            </li>


                        </ul>
                        <div className="tab-content card shadow-lg mb-5" id="myTabContentJust">
                            <div className="tab-pane fade  show active" id="businessProblem" role="tabpanel" aria-labelledby="1">
                                <div class="row align-items-center p-4">
                                    <div class="col-md-12">
                                        <h4 className="font-weight-bold mb-3">BUSINESS PROBLEM</h4>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>A large Manufacturing company which designs and manufactures connectivity and sensor solutions for a variety of industries. </li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Over 500,000 parts/products available for the end user.  The company wants to digitize the information available in unstructured sources and make it available for the user in a structured format.</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Currently it is being done manually by the team which goes through these documents and populates the input template for the ecommerce platform.​</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>There are challenges of High customer churn and loss of business due to missing information.​</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="aiApproch" role="tabpanel" aria-labelledby="2">
                                <div class="row align-items-center p-4">
                                    <div class="col-md-12">
                                        <h4 className="font-weight-bold mb-3">AI APPROACH</h4>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Since Most of this information is stored in image drawings, our AI team was leveraged for Automating  attribute cleanup using NLP and Machine Learning.</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Automate the process of knowledge extraction from  unstructured / semi-structured documents and bring in cognitive intelligence.</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Computer Vision and Soft Computing technology is used for auto segmentation of images and documents to extract and correlate knowledge. ​</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Cognitive assist based platform used to enhance user experience.​</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="BusinessBenifit" role="tabpanel" aria-labelledby="2">
                                <div class="row align-items-center p-4">
                                    <div class="col-lg-12">
                                        <h4 className="font-weight-bold mb-3">BUSINESS BENEFITS</h4>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Learning Impact: Cognitive assist with continuous learning.</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Productivity Impact: Productivity improved by 80% .Reduced cycle time for each product from 45 minutes to 10 minutes.</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Confidence Level: Fill Rate Efficiency  of the whole process is 85%.</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>User experience: Intelligent inventory search by Providing alternatives and recommendations for the parts the user is looking for.</li>


                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section >
            </main >
        )
    }
}
