import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';

export default class Arvr extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <section>
                                    <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Augmented & Virtual Reality <span className="font-weight-light">(AR/VR) Services</span>
                                    </h2>

                                    <p className="text-justify my-3">Enabling businesses with immersive technologies to drive optimum value</p>
                                    <p className="text-justify my-3">Customer Experience is the War-field for Brands. Differentiated CX is the core objective of Brands to retain customer loyalty.
                                    </p>
                                    <h5 className="title mb-3 mt-5 wow fadeIn font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        Overview
                                    </h5>
                                    <p className="text-justify">VisioAize, <b>with its ace digital and AI blend</b>, has been at the forefront of helping enterprises deliver out of the box and contextual experiences to their users.
                                    </p>
                                    <p className="text-justify">User Experience is undergoing a tectonic shift in how customers perceive and interact with the digital world at large. The tectonic shift in perception augmented by AI and interactive tech like Augmented Reality (AR), Virtual Reality (VR), is driving multisensory and multimodal user experiences.
                                    </p>
                                    <p className="text-justify">VisionAize, is well positioned to help our clients rapidly and sustainably unlock and unleash the value from their immersive technology business use cases just as the convergence of the physical and virtual world is accelerating exponentially.
                                    </p>

                                    <div className="text-center my-4">
                                        <img alt="img" src="img/svg/ar-vr.svg" className="img-fluid w-100" style={{ maxHeight: '300px' }} />
                                    </div>

                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>
                                            <span className="font-weight-bold">In-store engagement:</span> Aids consumers navigate a store , find products, gain store incentives or rewards as they move
                                        </li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>
                                            <span className="font-weight-bold">Product customization:</span> Helps retailers and brands to visualize ideas before investing in execution
                                        </li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>
                                            <span className="font-weight-bold">Experiential campaigns:</span> Engrossing customers through gaming, storytelling and branded experiences
                                        </li>
                                    </ul>

                                    <h5 className="title mb-3 mt-5 wow fadeIn font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        Use Cases
                                    </h5>
                                    <div className="row px-2">
                                        <div className="col-md-12 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Augmented Reality Classrooms</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">Captivate students' attention and encourage them to study by providing animated content in classroom lessons by leveraging technologies such as AR.</p>

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
                                                <h5 className="mb-0 font-weight-bold">Transformation of Lectures into Immersive Learning Experiences</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">Transform lectures into immersive learning experiences by using VR. Assist students create models in various subject domains and help them in visualization of complex concepts.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-12 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Campus Tours in Student Recruitment</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">Create human body models and help medical students to learn anatomy in greater depth by capitalizing technologies such as AR. </p>
                                            </div>
                                        </div>
                                        <div className="col-md-12 px-2 mb-3">
                                            <div className="list-group fanylist_group px-3 h-100">
                                                <h5 className="mb-0 font-weight-bold">Virtual Reality Shopping and Artificial Intelligence</h5>
                                                <hr className="w-100" />
                                                <p className="text-justify">By implementing an immersive VR environment, AI applications can test products or retail ideas that have not been brought to on the market, benching them on a virtual shelf to analyze consumer reactions and behavior to real-time merchandising.</p>
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
