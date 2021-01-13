import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';

export default class Engineering extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <section>
                                    <h4 className="title mb-md-5 mb-2 wow fadeIn text-center font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Smart production lines are definitely the future. How exactly does artificial intelligence make such a big difference to the engineering sector?

                                    </h4>
                                    <h5 className="title mb-3 mt-5 wow fadeIn font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        The rise of advanced engineering

                                    </h5>
                                    <p className="text-justify my-3">AI is the next platform. The world’s top minds affirm it. Engineering innovation directs it. Now it’s the time to get on board with VisionAize.</p>

                                    <h5 className="title mb-3 mt-5 wow fadeIn font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        Overview
                                    </h5>
                                    <p className="text-justify">VisionAize helps transform engineering and digitization Engineering information is essentially presented in the form of drawings, documents and 3D models (either design-built or via point clouds). The application of AI technology  enables computers to “read” and process engineering documents and drawings the way a human would, effectively replacing manual processing, improving engineering productivity and further automating engineering deliverables.</p>

                                    <div className="text-center mb-4">
                                        <img alt="img" src="img/svg/engineer.svg" className="img-fluid w-100" />
                                    </div>
                                    <h5 className="title mb-3 mt-5 wow fadeIn font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        applications
                                    </h5>
                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>
                                            <span className="font-weight-bold">Capability Improvement:</span> It enhances and brings drastic capabilities to the engineer relative to what we are capable of on our own. Through organic latticing tools, we have weight-saving capabilities like never before possible.

                                        </li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>
                                            <span className="font-weight-bold">Design and Data Management:</span> Perhaps the most impactful aspect of AI innovation in engineering is just how it will affect our workflow management. AI extends beyond the design process and stretches into data management. In the bigger picture, we arrive at the Internet of Things. AI helps us manage our designs and improve interoperability, but it will also break down barriers between departments – between tasks. The AI programs aiding in  managing big data, we will be able to seamlessly and smoothly integrate manufacturing and design with cloud computing, smart machines, and real-time monitoring.

                                        </li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>
                                            <span className="font-weight-bold">Generative design:</span> With generative design, we can explore design options that never would have been an option. Eventually these tools are implemented into our CAD tools and engineering system, our capabilities as engineers will only be expanded.
                                        </li>
                                    </ul>

                                    <h5 className="title mb-3 mt-5 wow fadeIn font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        Use Cases
                                    </h5>
                                    <div className="row px-2">
                                        <div className="col-md-12 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Planning and Design</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">BIM is a robust 3D model-based process that gives architecture, engineering, and construction (AEC) professionals the required insights to efficiently plan, design, construct, and manage buildings and infrastructure.</p>
                                                <p className="text-justify">The AEC industry is aiming to leverage AI/ML in the form of generative design to identify and mitigate clashes between the different models generated by the individual teams in the planning and design phase.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-12 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Distance Learning</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">Reduce dropout rates associated with online courses by leveraging social VR apps. Empower remote students in diverse locations to feel more connected.</p>

                                            </div>
                                        </div>
                                        <div className="col-md-12 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Safety and Efficiency</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">Field data accumulated from the site in the form of audio, video and construction management documents can provide actionable insights for the challenges that construction managers and superintendents face on a daily basis in terms of risk-mitigation.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-12 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Monitoring and Maintenance</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">AI based Solution can collect data from existing Building Management System in commercial spaces and also take into account user request data to moderate and optimize temperatures in different parts of the facility dynamically with the aim of increasing cost savings and improving energy efficiencies.</p>
                                                <p className="text-justify">Once the app/solution receives a request from an user, it automatically provides 10 minutes of hot or cool air to gauge the discomfort levels based on how many additional requests are received. Eventually, the app uses user request data to identify patterns and preferences based on location.</p>
                                                <p className="text-justify">In the AEC Industry, AI can go a long way in addressing the safety risks and inefficiencies. In the near future, with data-gathering cameras on heavy equipment and drone-based terrain visualization for the jobsite, it is expected that AI will enable operators to make informed decisions based on higher awareness levels about their surroundings and also help monitor construction equipment towards improving efficiency.
</p>
                                            </div>
                                        </div>


                                    </div>
                                </section>
                            </div>
                            {/* <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <div className="rightsidebarHead">Case Studies</div>

                                    <Link to={Links.DrillingNptPredictor} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Drilling/NPT Analyzer and Predictor</span></Link>
                                    <Link to={Links.IncidentAnalyzerPredictor} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Incident Analyzer & Predictor (Refinery &
                                        Pipeline</span></Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

            </main >
        )
    }
}
