/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
export default class TransportRouteOptimization extends Component {
    render() {
        return (
            <main>
                <section className="p-md-3 text-lg-left light-blue-back">
                    <div className="container pt-5">
                        <div className="row d-flex justify-content-center">
                            <h3 className="title pb-5 wow fadeIn font-weight-bold text-center text-uppercase" data-wow-delay="0.2s">
                                Transport Route

                               <span className="font-weight-light border-line"> Optimization</span>
                            </h3>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mt-3">
                                <div class="list-group card shadow-lg p-4">
                                    <img src="img/Images/ML DRIVEN OPTMIZATION PLATFORM.jpg" className="w-100" />
                                </div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <div class="list-group card shadow-lg p-3">
                                    <h4 className="font-weight-bold">Objective: </h4>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Optimization</b>
                                            <ul className="mt-3">
                                                <li>Reduction of Cost of transport per employee</li>
                                                <li>Improvement of on time pick up, drop, with reduced leakages of productivity due to transport delays.</li>
                                            </ul>
                                        </li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Hygiene Checks</b>
                                            <ul className="mt-3">
                                                <li>Employee Satisfaction levels need to be sustained/improved</li>
                                                <li>Risk Levels should be sustained/reduced</li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <div class="list-group card shadow-lg p-3">
                                    <h4 className="font-weight-bold">Client: </h4>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Create a master list of person locations (latitude and longitude)</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Create a master of distances and times between each pair of employees</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Partition each shift into groups : Set Partitioning Problem</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Create a cost function combining the vehicle cost and the quality of service offered</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Find the optimal route for each partition (selecting those which meet the distance and time constraints) : Travelling Salesman Problem</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Assign employees to minimum cost vehicles that accommodate the groups</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main >
        )
    }
}

