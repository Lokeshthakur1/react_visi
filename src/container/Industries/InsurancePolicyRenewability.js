/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
export default class AdobeCaseStudy extends Component {
    render() {
        return (
            <main>
                <section className="p-md-3 text-lg-left light-blue-back">
                    <div className="container pt-5">
                        <div className="row d-flex justify-content-center">
                            <h3 className="title pb-5 wow fadeIn font-weight-bold text-center text-uppercase" data-wow-delay="0.2s">
                                RCC Insurance
                               <span className="font-weight-light border-line"> Analytics</span>
                            </h3>
                        </div>
                        <div class="row">

                            <div class="col-md-12 mt-3">
                                <div class="list-group card shadow-lg p-3">
                                    <h4 className="font-weight-bold">ROI OF MODELING EXERCISE</h4>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> ~26.04% increase in positive decision along with collection.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Expected yield in decision service level can increase up to 7.97 @ 30 days.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Expected yield in collection service level can increase up to 8.5% @ 30 days.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Improved effectiveness in policy decision status.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Lowered cost of renewal campaigns.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Increased organization awareness of factors affecting renewability for different customer segments.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Automation of MI-Reporting system.</li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <div class="list-group card shadow-lg p-3">
                                    <h4 className="font-weight-bold">Increasing Customer Renewal & Decision </h4><hr />
                                    <h4>Objective : Improving Decision & Customer Renewal</h4>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> To identify policy holders who are most likely to renew and also have higher propensity to positive decision which can help in prioritize follow-up</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Possibly moving out less likely polices from the program to some low cost resource to maximize profitability.</li>
                                    </ul>
                                    <br />
                                    <h4>Quantitative Analysis of propensity to renewal and positive decision </h4>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> What are the key identifier for renewal?</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> What are patterns in customer renewal across different factors?</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> What is the probability of a customer to renew?</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> How does the renewal rates change by implementing the model?</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-12 mt-3">
                                <div class="list-group card shadow-lg p-3">
                                    <h4 className="font-weight-bold">Derived Variables</h4><hr />
                                    <p>Multiple derived variables were created for  training and testing the performance of the model and it’s impact on business</p>
                                    <h5 className="font-weight-bold">Demographics</h5>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Age of the customer as of last day of the month (for analysis last day of February’16 has been consider).</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Age band  - Age band has been created as  &lt;20 = A , 21 - 30 = B, 31 - 40 = C, 41 -50= D, 51 -60= E , 61 &gt; = F. Categorization has been done on the basis of frequency distribution that is following a normal distribution.</li>
                                    </ul>
                                    <br />
                                    <h5 className="font-weight-bold">Geography</h5>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> City categorization – have been done on the basis of HRA classification list, source Wikipedia.</li>
                                    </ul>
                                    <br />
                                    <h5 className="font-weight-bold">Financial & Product Behavior</h5>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Monthly premium – Each premium amount has been normalized in monthly term.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Policy age – has been calculated as of last day of Feb’2016.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>  Delinquency period – calculated as policy due for as of last day of Feb’2016.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>  # of premium paid in terms of  monthly premium.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>  Policy year has been converted to month.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>   Total premium amount already paid.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>    Premium ratio - # of monthly premium paid out of  total month.</li>
                                    </ul>
                                    <br />
                                    <h5 className="font-weight-bold">Others</h5>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Owner Categorization – marked 1 when owner and insured name is different due to company insurance, 2 when its not a company and 0 when it is same.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Tentative collection – Marked as YES for either a positive decision (judged on the basis of disposition) or for actual paid customers and rest are marked as NO.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>  Decision Status – marked as YES for positive disposition, marked as NO for negative disposition and NA for others.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>  Contactibility status – marked as YES for the contactable disposition and NO for others.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <div class="list-group card shadow-lg p-3">
                                    <h4 className="font-weight-bold">Modelling Base Details</h4>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> <b>Analysis Window -</b>    Up till February’2016.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>  <b>Base Considered -</b>    All policies with any disposition.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Expected yield in collection service level can increase up to 8.5% @ 30 days.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>  <b>Target Definition -</b>    All policies that were lapsed but have positive disposition or actual collection.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> <b>Variable Considered  -</b>  All the demography, geography, financial, and product related variables</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>  <b>Exclusion  -</b>  All the company polices which are even less than 1% (~0.115%) out of the whole population.  Policies with blank disposition.</li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <div class="list-group card shadow-lg p-3">
                                    <h4 className="font-weight-bold">Modelling Base Details</h4>
                                    <hr />
                                    <img src="img/Images/Renewability Model – Policy level scoring.jpg" className="img-fluid" />

                                </div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <div class="list-group card shadow-lg p-3">
                                    <h4 className="font-weight-bold">Policy Profiling</h4>
                                    <hr />
                                    <p className="text-justify">Policies were segmented on the basis of the likelihood of collection/positive decision along with the probability score clubbed with “to be collected amount”.</p>
                                    <hr />
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <img src="img/Images/Policy Profiling_img.jpg" className="w-100" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 border">
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Policies were segmented in High, Medium and Low profiles on basis of their probability to be collected/positive decision.</li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span> Another level of segmentation done by clubbing the amount to be paid along with it’s probability to be collected/positive decision.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <div class="list-group card shadow-lg p-3">
                                    <h4 className="font-weight-bold">Trends & Factors contributing to Renewability </h4>

                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>City Category –</b> A category city has higher reinstatement rate than A1, B,C, or rural category.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Premium Method –</b> Policy paid by credit card is having lowest reinstatement rate than other mode.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Product –</b> Max life smart invest pension plus is having highest number of renewal than other policies. </li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Age Band –</b> Customer belong to age group from 41 to 50 is having most reinstatement rate.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Channel –</b> Sales  channel is having significant impact on the decision.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Gender –</b> Male customers are slightly higher likely to positive decision than females.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Premium paid for month –</b> Customers already paid premium for 50-60 months are having the highest rate of reinstatement.  Month calculated on (Last paid date – Issue date).</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>AFYP –</b> Customers having annualized premium amount between 20K-40K is most likely to covert.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Allocation Segment –</b> Whether the policy is within the revival period or post revival period.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Frequency –</b> Whether the policy was quarterly/half-yearly/monthly etc.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Policy Status –</b> Status of the policy i.e. premium holiday/premium paid regularly etc. also seem to have very high impact.</li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span><b>Premium amount to be made –</b> Due amount.</li>
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

