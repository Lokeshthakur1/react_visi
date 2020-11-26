/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Retail extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        RETAIL <span className="font-weight-light"></span>
                                    </h2>

                                    <div className="text-center">
                                        <img src="img/svg/retail_img.svg" className="img-fluid" />
                                    </div>
                                    <p className="text-justify">
                                        Retail analytics is the process of providing analytical data on inventory levels, supply chain movement, consumer demand, sales, etc. that are crucial for making marketing, and procurement decisions.

                                </p>
                                    <p className="text-justify">
                                        An easy, ready-to-use, simple retail supply chain analytic solution that provides in depth business intelligence in the form of graphical reports, KPIs, Dashboards and Predictive Models to take real time decisions to improve productivity and performance of your organisation
                                </p>
                                    <div className="row">
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group p-3 card shadow-lg">
                                                <h4 className="title my-3 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                                    Customer Segmentation & <span className="font-weight-light">profiling</span>
                                                </h4>
                                                <p>
                                                    Segmenting or dividing a company’s customers into groups relevant to a particular business with the goal of deciding how to relate to customers in each segment in order to maximize the value of each customer to the business. Customer profiling, which can be done even without segmentation, is the next step to understand in-depth the nature of the segments

                                </p>
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Customer purchase history, customer data (demographic, psychographic, behavioural etc.)</li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Clustering, CHAID, recursive partitioning, Classification tree etc.</li>

                                                    <li class="list-group-item">
                                                        <ul className="mt-3">
                                                            <li>Identify engaged/disengaged customer segments</li>
                                                            <li>Develop customer retention/acquisition strategy</li>
                                                            <li>Cross-sell/up-sell to boost revenues</li>
                                                            <li>Customer lifetime value (CLTV) analysis</li>
                                                            <li>Identify drivers of loyalty & areas of improvement</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-md-12 mt-3">
                                            <div className="list-group p-3 card shadow-lg">
                                                <h4 className="title my-3 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                                    Market basket  <span className="font-weight-light">analysis</span>
                                                </h4>
                                                <p>
                                                    Market basket analysis is the study of items that are purchased (or otherwise grouped) together in a single transaction or in multiple, sequential transactions based on an understanding of the relationships & the strength of relationships among the products purchased together
                                    </p>
                                                <p>
                                                    Item level purchase data
                                    </p>
                                                <p>
                                                    Association analysis, Affinity analysis and Recommender based approach
                                    </p>

                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Product placements</li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Product bundling</li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Other promotion types planning such as coupons</li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Cross-sell/Up-sell</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group p-3 card shadow-lg">
                                                <h4 className="title my-3 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                                    Sales/demand <span className="font-weight-light">forecasting</span>
                                                </h4>
                                                <p>
                                                    Sales/demand forecasting critical to retail to manage the entire supply chain & maximize profits. Sales/demand forecasting based on historical data or factors influencing sales/demand.  Demand history can be created by scrubbing the sales history and at times adding to the sales history as demand is sales plus opportunity lost
                                    </p>

                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Product sales/demand data, data on influencing factors</li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Time series forecasting, Regression analysis</li>

                                                    <li class="list-group-item">
                                                        <ul className="mt-3">
                                                            <li>Sales planning</li>
                                                            <li>Inventory management</li>
                                                            <li>Resource planning & deployment</li>
                                                            <li>Customer lifetime value (CLTV) analysis</li>
                                                            <li>Identify drivers of loyalty & areas of improvement</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group p-3 card shadow-lg">
                                                <h4 className="title my-3 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                                    Safety stock <span className="font-weight-light">optimization</span>
                                                </h4>
                                                <p>
                                                    Optimizing safety stock to minimise demand-supply mismatch cost & maximise profits in case of dynamic demand & supply lead times for a given customer service level. Simulations based on derived distributions for demand & lead times help businesses to derive safety stocks and prepare for various uncertain scenarios
                                    </p>
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Product dispatch dates (expected/actual), actual product delivery date, actual quantity delivered, actual quantity consumed</li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Distribution fitting, Simulations</li>

                                                    <li class="list-group-item">
                                                        <ul className="mt-3">
                                                            <li>Safety stock optimisation</li>
                                                            <li>Estimation of optimal production level</li>
                                                            <li>Estimation of cost of opportunity loss</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group p-3 card shadow-lg">
                                                <h4 className="title my-3 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                                    Promotion impact  <span className="font-weight-light">on sales</span>
                                                </h4>
                                                <p>
                                                    Promotion is crucial to retail and it is very important to understand how promotions affect sale. Promotion impact varies from product category to category & generally tends to follow an S-curve i.e. a minimum & a maximum level of promotion. Also, the impact can change when one promotion is combined with another
                                    </p>
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Item level sale data with promotion discount</li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Regression paradigm and Optimization modeling</li>

                                                    <li class="list-group-item">
                                                        <ul className="mt-3">
                                                            <li>Promotion impact on sales</li>
                                                            <li>Minimum, maximum & optimum discount levels</li>
                                                            <li>Conditional impact of one promotion given another & the optimal combination of the two promotions to maximise sales</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 
                                <div className="row text-center d-flex justify-content-center mt-4">
                                    <div className="col-lg-6 p-3 hoverable-2">
                                        <img src="img/svg/012-system-1.svg" height="60px"/>
                                        <h6 className="my-4 font-weight-bold">Customer Segmentation and Profiling
    
                                        </h6>
                                            <p className="text-justify">
                                            Identify engaged/disengaged customer segments and develop customer
                                            retention/acquisition strategy
                                        </p>
                                    </div>
                                    <div className="col-lg-6 p-3 hoverable-2">
                                        <img src="img/svg/001-market.svg" height="60px"/>
                                        <h6 className="my-4 font-weight-bold">Market Basket Analysis
    
                                        </h6>
                                            <p className="text-justify">Identify the strength of relationships among the products purchased together and
                                            plan
                                            product placements accordingly</p>
                                    </div>
                                    <div className="col-lg-6 p-3 hoverable-2">
                                        <img src="img/svg/002-demand.svg" height="60px"/>
                                        <h6 className="my-4 font-weight-bold">Demand Forecasting
    
                                        </h6>
                                            <p className="text-justify">Scrub or add to sales history to generate demand forecast aiding sales planning,
                                            inventory management and resource deployment</p>
                                    </div>
                                    <div className="col-lg-6 p-3 hoverable-2">
                                        <img src="img/svg/002-speaker.svg" height="60px"/>
                                        <h6 className="my-4 font-weight-bold">Promotion Impact
    
                                        </h6>
                                            <p className="text-justify">
                                            Identify optimum discount levels across various product categories and their
                                            combined effect on overall sales</p>
                                    </div>
                                </div>
                             */}
                                </section>

                            </div>
                            <div className="col-md-4">
                                {/* <div className="list-group fanylist_group">
                                    <Link to={Links.InventoryManage} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Inventory Management</span></Link>
                                    <Link to={Links.AdaptiveHomepage} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Adaptive homepage</span></Link>
                                    <Link to={Links.ConversationalSupport} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Conversational Support</span></Link>
                                    <Link to={Links.DemandForecasting} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Demand Forecasting</span></Link>
                                </div> */}

                                <div className="list-group fanylist_group">
                                    <Link to={Links.RetailsCaseStudies} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Retail Case Studies</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
