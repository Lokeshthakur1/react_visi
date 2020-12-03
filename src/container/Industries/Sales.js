/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Sales extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">Sales<span className="font-weight-light"></span></h2>
                        <div className="text-center my-4">
                            <img src="img/svg/sales_diagram.svg" height="400" style={{ maxWidth: '100%' }} />
                        </div>

                        <h4 className="font-weight-bold my-4">In Salesforce, can set up separate sales processes for each type of sale you make</h4>

                        <div className="blockquote bq-primary">
                            <ul className="list-group list-group-flush py-3">
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Create the opportunity stages needed in the sales process.</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Name the sales process, and select what opportunity stages are included in that particular process.</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Optionally, create an Opportunity page layout specific to the process.</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Create a record type for the sales process. Record types link the sales process to the page layout that goes with it.</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Setting up a Sales team.</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Build the team and its coordinating capability</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Ascertain specific responsibilities with value affixing</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Measure the output of each sales person and the group.</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Ascertain the value-addition by each campaign in particular periods.</li>
                                <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Compare the actual KPIs with the planned ones and account for the gap.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
