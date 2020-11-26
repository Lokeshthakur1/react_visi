import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class HumanResource extends Component {
    render() {
        return (
            <main>

                <section class="py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <section>
                                    <h2 class="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Human <span class="font-weight-light"> Resource</span>
                                    </h2>
                                    {/* <h4 class="title mb-5 wow fadeIn" data-wow-delay="0.2s">
                                        Intelligent, integrated systems for critical infrastructure protection
                                    </h4> */}
                                    <p className="text-justify">
                                        We implement a scalable, scientific model to extract predictions about employee engagement, performance and attrition based on demographic and performance data of employees coupled with measured indicators of the employment market. </p>
                                    <hr />
                                    <h4 class="title my-3 wow fadeIn px-3 font-weight-bold" data-wow-delay="0.2s">
                                        Proposed Predictive Model
                                    </h4>
                                    <p className="text-justify">
                                        When forecasting in complex, uncertain situations, expertise is of little value. Decades of empirical research have led to the conclusion that experts, while good at diagnosis, are poor at prognosis. A more reliable and consistent methodology is based on modeling the trajectory of behaviour based on known data and basing conclusions on predictions derived as such.

                                    </p>

                                    <div className="row">
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <h4 class="title my-3 wow fadeIn px-3 font-weight-bold" data-wow-delay="0.2s">
                                                    The eligibility (E) group
                                                </h4>
                                                <p className="px-3">Based on a priori (known) information about who the employee is:</p>
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>includes demographics, qualification, relevant experience, salary, etc. (usually found in resumes)

                                                </li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>information about employee strengths and weaknesses from interview evaluations
</li>
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>historical information about roles, skills and performance obtained from performance evaluation of employees
</li>
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>psychological makeup, motivation and personality traits obtained from psychometric  evaluations
</li>
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>engagement and ambition of employee from public social media channels
</li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <h4 class="title my-3 wow fadeIn px-3 font-weight-bold" data-wow-delay="0.2s">
                                                    The outcome (O) group
                                                </h4>
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>The Outcome group is based on historic data about employees, both current and those who have left the company
                                                </li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>We assess the career paths of the employee in the organization based on year-to-year changes in roles and responsibilities, performance etc.
                                                </li>
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>This group is used as the training set for our predictive model
                                                </li>

                                                </ul>

                                                <p className="text-justify p-3">Based on the above determination, we compute two joint probability distributions: one for the “eligibility” group and one combining the eligibility and “outcome” criteria.</p>
                                            </div>

                                        </div>

                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <h4 class="title my-3 wow fadeIn px-3 font-weight-bold" data-wow-delay="0.2s">
                                                    Data
                                            </h4>
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>Historical data of employees


                                                        <ul className="mt-3">
                                                            <li className="text-muted">Employee data (personal, skill, education, training etc.)</li>
                                                            <li className="text-muted">Interview evaluation of employees</li>
                                                            <li className="text-muted">Psychometric evaluation (if any)</li>
                                                            <li className="text-muted">Performance and Promotion evaluations</li>
                                                            <li className="text-muted">Exit interview evaluation for parted employees</li>
                                                        </ul>
                                                    </li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Data related to factors internal to the company: organization, management and culture

                                                </li>
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>Data related to factors associated with roles and skill development of the employee in the company

                                                </li>

                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-md-12 mt-3">
                                            <div className="list-group card shadow-lg">
                                                <h4 class="title my-3 wow fadeIn px-3 font-weight-bold" data-wow-delay="0.2s">
                                                    Benefits

                                            </h4>
                                                <ul class="list-group list-group-flush py-3">
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>Fit-for-role and Maturity matrix for employees</li>
                                                    <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>Help to prepare a skill-role Gartner type depiction and skill role value depiction</li>
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>Prioritize and target applicants who are most qualified for a specific position.</li>

                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>Correlate the overall “value” of the employee, with the performances-in-projects for every employee with every skill.</li>
                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>Performance correlation w.r.t personal, organizational & market factors</li>

                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>Establish effective training and career development initiatives</li>

                                                    <li class="list-group-item"><span class="pr-4"><i
                                                        class="fas fa-check"></i></span>Predictive and prescriptive analysis for attrition and other metrices
</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                            <div class="col-md-4">
                                <div class="list-group fanylist_group">
                                    <Link to={Links.EmployeeAttr} class="list-group-item list-group-item-action"> <i
                                        class="fas fa-check mr-2"></i> <span>Employee Attrition and Retain</span></Link>
                                    <Link to={Links.EmployeeEngagement} class="list-group-item list-group-item-action">
                                        <i class="fas fa-check mr-2"></i> <span>Employee Engagement</span></Link>
                                    <Link to={Links.EmployeeProductivity} class="list-group-item list-group-item-action">
                                        <i class="fas fa-check mr-2"></i> <span>Employee Productivity</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
