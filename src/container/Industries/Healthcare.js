/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Healthcare extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                    Healthcare <span className="font-weight-light"></span>
                                </h2>

                                <div className="text-center my-4">
                                    <img src="img/svg/healthcare_img.svg" className="img-fluid" />
                                </div>
                                <p className="text-justify">
                                    Modern Healthcare industry is evolving rapidly with new technologies and smart solutions. Healthcare management has become a challenge with large volumes of data in cost & patient outcomes. Ai powered solutions are playing key roles in taking care of patients, hospital management, data management and other problems.
                                </p>
                                <p className="text-justify">
                                    As a automotion leader in Ai VisionAize’s is empowering leading healthcare companies and changing the industry. We implement a health-tech platform in the areas of collaborative healthcare, population healthcare, preventive health risk assessment & management, and evidence-based care coordination.
                                </p>
                                {/* <p className="text-justify">
                                        Transparency, accountability, quantitative comparison and fullest possible visual
                                        rendition
                                        in Health Care is proffered to the patients and care-providers. A quantitative measure
                                        of
                                        quality care is what we provide by combining the best-of-the-practice Science and
                                        Technology.
                            </p>
                                    <p className="text-justify">
                                        IDEAL HEALTHCARE is that solution which combines the knowledge and wisdom of domain
                                        experts,
                                        technologists and hands on practitioners making people judge and decides their value of
                                        service they would get.
                            </p> */}

                                <div className="text-center mb-4">
                                    <img alt="img" src="img/svg/solution_data_model.svg" className="img-fluid" />
                                </div>

                                <h4 className="title my-5 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                    The main solutions of this <span className="font-weight-light">application are</span>
                                </h4>

                                {/* <div className="card p-3 mb-3">
                                        <h5 className="font-weight-bold mb-3">Implementing Preventing Healthcare</h5>
                                        <img alt="img" src="img/svg/ImplementingPreventingHealthcare.svg" className="img-fluid px-3 my-3 w-100" />
                                        <h5 className="mb-2">Client</h5>
                                        <p>A health & wellness company in India</p>
                                        <hr />
                                        <h5 className="mb-2">Solution</h5>
                                        <p className="text-justify">A comprehensive platform which analyses genomic, lifestyle and cognitive behavioral data to precisely predict individual health risk and engage users through personalized recommendations.</p>
                                        <hr />
                                        <h5 className="mb-2">Business Problem</h5>
                                        <p className="text-justify">The specific health test lacks comprehensive interpretation of the test results, risk assessment and prediction and personalized recommendation.</p>
                                        <hr />
                                        <h5 className="mb-2">Business Benefits</h5>
                                        <p className="text-justify">Health Risk Assessment Disease Susceptibility Prediction, Fitness & Nutritional Trait Analysis Personalized Prevention, Recommendation, Engagement & Gamification</p>
                                    </div>

                                    <div className="card p-3 mb-3">
                                        <h5 className="font-weight-bold mb-3">Decision Support for Hospitals</h5>

                                        <img alt="img" src="img/svg/DecisionSupport.svg" className="img-fluid px-3 my-3 w-100 h-70" />

                                        <h5 className="mb-2">Client</h5>
                                        <p>Multiple Hospitals in India</p>
                                        <hr />
                                        <h5 className="mb-2">Business Problem</h5>
                                        <p className="text-justify">Hospital operations generates data from heterogeneous sources and needs unified approach for generating data driven decisions and predictive action items.</p>
                                        <hr />
                                        <h5 className="mb-2">Solution</h5>
                                        <p className="text-justify">A platform for heterogeneous data collection, collation and unification for  generating actionable insights, predictions (bed occupancy, epidemic and pandemic alerts etc.) and optimization (cost of packages, inventory etc.)</p>
                                        <hr />
                                        <h5 className="mb-2">Business Benefits</h5>
                                        <p className="text-justify">Increased operational efficiency Preparedness to handle epidemic and pandemic situations Better patient service and satisfaction</p>
                                    </div>

                                    <div className="card p-3 mb-3">
                                        <h5 className="font-weight-bold mb-3">Data Driven Decision Support</h5>
                                        <img alt="img" className="img-fluid" src="img/svg/data_driven-img.svg" />
                                    </div>

                                    <div className="card p-3 mb-3">
                                        <h5 className="font-weight-bold mb-3">Clinical Trial Planning and Execution</h5>
                                        <img alt="img" className="img-fluid" src="img/svg/clinical_trial-img.svg" />
                                    </div> */}



                                <div className="row wow px-2 justify-content-center fadeIn" data-wow-delay="0.4s">
                                    <div className="text-left col-lg-4 col-md-6 mb-3 px-2">
                                        <div className="feature-title title spacing">
                                            <img alt="img" src="img/Images/virtual_clinic.jpg"
                                                className="img_bg" />
                                            <h6>
                                                Virtual Clinical Trial Platform for Complex Diseases <br /> <Link to={Links.VirtualClinic}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                        </div>
                                    </div>
                                    <div className="text-left col-lg-4 col-md-6 mb-3 px-2">
                                        <div className="feature-title title spacing">
                                            <img alt="img" src="img/Images/Disease Prognosis Assessment Platform.jpg"
                                                className="img_bg" />
                                            <h6>Disease Prognosis Assessment Platform<br /> <Link to={Links.DiseasePrognosisAssessment}
                                                className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                data-wow-delay="0.3s">View
                                                more</Link></h6>
                                        </div>
                                    </div>
                                    <div className="text-left col-lg-4 col-md-6 mb-3 px-2">
                                        <div className="feature-title title spacing">
                                            <img alt="img" src="img/Images/edma.jpg"
                                                className="img_bg" />
                                            <h6>Precision Medicine Platform for Diabetic Macular Edema<br /> <Link
                                                to={Links.PrecisionMedicinePlatformAdma}
                                                className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                data-wow-delay="0.3s">View
                                                more</Link> </h6>
                                        </div>
                                    </div>
                                    <div className="text-left col-lg-6 col-md-6 mb-3 px-2">
                                        <div className="feature-title title spacing">
                                            <img alt="img" src="img/Images/medicine.jpg"
                                                className="img_bg" />
                                            <h6>Precision Medicine Platform Solutions Ecosystem & Layout<br /> <Link to={Links.PrecisionMedicinePlatformEcosystem}
                                                className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                data-wow-delay="0.3s">View
                                                more</Link></h6>
                                        </div>
                                    </div>
                                    <div className="text-left col-lg-6 col-md-6 mb-3 px-2">
                                        <div className="feature-title title spacing">
                                            <img alt="img" src="img/Images/medicin_.jpg"
                                                className="img_bg" />
                                            <h6>Precision Medicine Platform Unique Proposition<br /> <Link to={Links.PrecisionMedicinePlatformPropotion}
                                                className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                data-wow-delay="0.3s">View
                                                more</Link></h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                {/* <div className="list-group fanylist_group">
                                    <Link to={Links.ClaimsPredictions} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Claims (Fraud & Rejection)
                                    Prediction</span></Link>
                                    <Link to={Links.FludemicPrediction} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Fludemic (Data Driven Health)
                                    Prediction</span></Link>
                                    <Link to={Links.DrugRecovery} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Drug Recovery</span></Link>
                                    <Link to={Links.RiskProfileAnalyzer} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Risk Profile Analyzer using Genomics</span></Link>
                                </div> */}
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    <Link to={Links.CollaborativeHealth} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Collaborative Healthcare</span></Link>
                                    <Link to={Links.PopulationHealthcare} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Population Healthcare</span></Link>
                                    <Link to={Links.PreventiveHealthcare} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Preventive Healthcare</span></Link>
                                    <Link to={Links.DecisionSupports} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Decision Support for Hospital</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </main >






        )
    }
}
