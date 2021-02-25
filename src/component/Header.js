/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Links } from '../app/links'
import Wrapper from './Wrapper'
import { WrapperData } from './WrapperData'

class Header extends Component {
    getKey(object, value) {
        let obj = WrapperData[Object.keys(object).find(key => object[key] === value)]
        // let bannerImgL = obj.bannerImgL,
        // description = obj.description,
        // heading = obj.heading,
        // Controls = obj.Controls?obj.Controls:false
        // console.log(bannerImgL,description,heading,Controls)
        return obj

    }


    render() {
        return (
            <>
                {(this.props.history.location.pathname === "/home" || this.props.history.location.pathname === "/") && <div className="leftSideNav" id="navbar_spy">
                    <Link className="nav-link" to={Links.Home}><span>Home</span></Link>
                    <Link className="nav-link" to={{ pathname: Links.Home, state: 'ai_powered_solution' }}><span>AI Powered<br />Solutions</span></Link>
                    <Link className="nav-link" to={{ pathname: Links.Home, state: "features" }}><span>Digital<br />Transformation</span></Link>
                    <Link className="nav-link" to={{ pathname: Links.Home, state: "clients" }}><span>Clients</span></Link>
                </div>}
                <header id="scrollPage">
                    <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
                        <div className="container-fluid align-items-center">
                            <Link className="navbar-brand title" to="home"></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <img alt="img" src="img/svg/menu.svg" height="25" />
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="list-unstyled navbar-nav ml-auto">
                                    <li className="nav-item ml-4">
                                        <Link className="nav-link title" to={Links.Home} data-offset="90">Home</Link>
                                    </li>

                                    {/* <li className="nav-item ml-4 dropdown dropdown-8 d-none">
                                        <a className="nav-link title" href={Links.Industries} data-offset="90">Industries</a>
                                        <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                            <li className="dropdown_item-2"><a className="tablink waves-effect waves-light"
                                                href={Links.Banking}>BANKING & FINANCIAL</a></li>
                                            <li className="dropdown_item-1"><a className="tablink waves-effect waves-light"
                                                href={Links.Healthcare}>HEALTHCARE & PHRAMA</a></li>
                                            <li className="dropdown_item-4"><a className="tablink waves-effect waves-light"
                                                href={Links.Hightech}>Hi-Tech</a></li>
                                            <li className="dropdown_item-4"><a className="tablink waves-effect waves-light"
                                                href={Links.Retail}>RETAIL</a></li>
                                            <li className="dropdown_item-4"><a className="tablink waves-effect waves-light"
                                                href={Links.Oilgas}>OIL & GAS</a></li>
                                            <li className="dropdown_item-4"><a className="tablink waves-effect waves-light"
                                                href={Links.Utility}>UTILITY</a></li>
                                            <li className="dropdown_item-4"><a className="tablink waves-effect waves-light"
                                                href={Links.TranspAndLogistic}>Transportation & Logistics</a></li>
                                            <li className="dropdown_item-4">
                                                <a className="tablink waves-effect waves-light"
                                                    href={Links.Environmental}>Environmental</a>
                                            </li>
                                        </ul>
                                    </li> */}

                                    {/* <li className="nav-item ml-4 dropdown dropdown-8">
                                        <a className="nav-link title" href="javascript:void(0)" data-offset="90">Industries</a>
                                        <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                            <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                className="tablink waves-effect waves-light" href={Links.Banking}>BANKING &
                                                FINANCIAL</a>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.ImprovedRustomerRetention}>Improved customer retention</a>
                                                    </li>
                                                    <li className="dropdown_item-3"><a className="waves-effect waves-light"
                                                        href={Links.Chatbots}>Chatbots</a></li>
                                                    <li className="dropdown_item-4"><a className="waves-effect waves-light"
                                                        href={Links.CustomizedInvestments}>Customized Investments</a></li>
                                                    <li className="dropdown_item-5"><a className="waves-effect waves-light"
                                                        href={Links.LifeTimeValuePrediction}>Life Time Value Prediction</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8">
                                                <a
                                                    className="tablink waves-effect waves-light" href={Links.Healthcare}>HEALTHCARE &
                                                PHRAMA</a>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.ClaimsPredictions}>Claims (Fraud & Rejection) Prediction</a>
                                                    </li>
                                                    <li className="dropdown_item-3"><a className="waves-effect waves-light"
                                                        href={Links.FludemicPrediction}>Fludemic (Data Driven Health)
                                                        Prediction</a></li>
                                                    <li className="dropdown_item-4"><a className="waves-effect waves-light"
                                                        href={Links.DrugRecovery}>Drug Recovery</a></li>
                                                    <li className="dropdown_item-5"><a className="waves-effect waves-light"
                                                        href={Links.RiskProfileAnalyzer}>Risk Profile Analyzer using
                                                        Genomics</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                className="tablink waves-effect waves-light" href={Links.Hightech}>Hi-Tech</a>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.SmartRiskPredictorAgileProcess}>Smart Risk Predictor for
                                                        Agile Process</a></li>
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.SuccessThroughSprints}>Success through Sprints</a></li>
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.ImprovementThroughDeepLearning}>Improvement through deep
                                                        learning</a></li>
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.BusinessModelMakeover}>The business model makeover</a></li>
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.StayingAheadCurveWith}>Staying ahead of the curve with
                                                        AI</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8">
                                                <a className="tablink waves-effect waves-light" href={Links.Retail}>RETAIL</a>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2">
                                                        <a className="waves-effect waves-light"
                                                            href={Links.InventoryManage}>Inventory Management</a>
                                                    </li>
                                                    <li className="dropdown_item-2">
                                                        <a className="waves-effect waves-light"
                                                            href={Links.AdaptiveHomepage}>Adaptive homepage</a>
                                                    </li>
                                                    <li className="dropdown_item-2">
                                                        <a className="waves-effect waves-light"
                                                            href={Links.ConversationalSupport}>Conversational Support</a>
                                                    </li>
                                                    <li className="dropdown_item-2">
                                                        <a className="waves-effect waves-light"
                                                            href={Links.DemandForecasting}>Demand Forecasting</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8">
                                                <a className="tablink waves-effect waves-light" href="oilgas">OIL & GAS</a>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.DrillingNptPredictor}>Drilling/NPT Analyzer &
                                                        Predictor</a></li>
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.IncidentAnalyzerPredictor}>Incident Analyzer & Predictor
                                                        (Refinery & Pipeline)</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                className="tablink waves-effect waves-light" href={Links.Utility}>UTILITY</a>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.IntelligentDemandForecast}>Intelligent Demand Forecast</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                className="tablink waves-effect waves-light"
                                                href={Links.TranspAndLogistic}>Transportation & Logistics</a>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.TranspPlatform}>Transport Platform</a>
                                                    </li>
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.PandemicCrowdControl}>Pandemic Crowd Control App</a>
                                                    </li>
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.PredictiveMaintenance}>Predictive Maintenance</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                className="tablink waves-effect waves-light"
                                                href={Links.Environmental}>Environment</a>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                        href={Links.AirPollutionMonitoringPrediction}>Air Pollution Monitoring
                                                        & Prediction</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}


                                    <li className="nav-item ml-4 dropdown dropdown-8">
                                        <a className="nav-link title" data-offset="90">Solutions</a>
                                        <ul className="dropdown_menu dropdown_menu--animated megamenu dropdown_menu-8">
                                            <li>
                                                <h5>By Industry</h5>
                                                <Link className="tablink waves-effect waves-light" to={Links.Banking}>FINTECH</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.Healthcare}>HEALTHCARE & PHRAMA</Link>
                                                <Link className="tablink waves-effect waves-light" to="/oilgas">OIL & GAS</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.Utility}>UTILITY</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.TranspAndLogistic}>Transportation & Logistics</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.Environmental}>Environment</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.Hightech}>Hi-Tech</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.Retail}>RETAIL</Link>
                                            </li>
                                            <li>
                                                <h5>By Functions</h5>
                                                <Link className="tablink waves-effect waves-light" to={Links.Finance}>Finance</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.HumanRecource}>Human Resource</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.ItItes}>It & Ites</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.SupplyChain}>Supply Chain</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.AiPowered}>Marketing</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.Sales}>Sales</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.DigitalOutreach}>Digital Outreach</Link>
                                                {/*<Link className="tablink waves-effect waves-light" to={Links.Organisational}>Organisational Data</Link>*/}
                                                <Link className="tablink waves-effect waves-light" to={Links.Engineering}>Engineering</Link> 
                                            </li>
                                        </ul>
                                        {/*                                         
                                        <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8 d-none">
                                            <li className="dropdown_item-1 dropdown dropdown-8">
                                                <a className="tablink waves-effect waves-light">By Industry</a>

                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                        className="tablink waves-effect waves-light">BANKING &
                                                FINANCIAL</a>
                                                       
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8">
                                                        <a
                                                            className="tablink waves-effect waves-light" href={Links.Healthcare}>HEALTHCARE &
                                                PHRAMA</a>
                                                       
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                        className="tablink waves-effect waves-light" href={Links.Hightech}>Hi-Tech</a>
                                                        
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8">
                                                        <a className="tablink waves-effect waves-light" href={Links.Retail}>RETAIL</a>
                                                  
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8">
                                                        <a className="tablink waves-effect waves-light" href="oilgas">OIL & GAS</a>
                                                       
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                        className="tablink waves-effect waves-light" href={Links.Utility}>UTILITY</a>
                                                    
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                        className="tablink waves-effect waves-light"
                                                        href={Links.TranspAndLogistic}>Transportation & Logistics</a>
                                                        
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                        className="tablink waves-effect waves-light"
                                                        href={Links.Environmental}>Environment</a>
                                                      
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                        className="tablink waves-effect waves-light"
                                                        href={Links.TravelHospitality}>travel & hospitality</a>
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                        className="tablink waves-effect waves-light"
                                                        href={Links.ItItes}>IT & ITES</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="dropdown_item-1 dropdown dropdown-8">
                                                <a className="tablink waves-effect waves-light">By Functions</a>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                        className="tablink waves-effect waves-light" href='/ai-powered'>Marketing</a>
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a className="waves-effect waves-light"
                                                        href="/social-media">Social Media Intelligence</a>
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                        className="tablink waves-effect waves-light" href={Links.HumanRecource}>Human Resource</a>
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><a
                                                        className="tablink waves-effect waves-light" href={Links.Finance}>Finance</a>
                                                    </li>


                                                </ul>
                                            </li>


                                        </ul>
                                    */}

                                    </li>

                                    {/* <li className="nav-item ml-4 dropdown dropdown-8 d-none">
                                        <a className="nav-link title" href={Links.Solution} data-offset="90">Solutions</a>
                                        <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                            <li className="dropdown_item-1"><a className="waves-effect waves-light"
                                                href="enterprise">Enterprise Application Platform</a></li>
                                            <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                href="/software-services">Software as a Service (SaaS) Framework</a></li>
                                            <li className="dropdown_item-3"><a className="waves-effect waves-light"
                                                href="/business-process">Business Process Automation Platform</a></li>
                                            <li className="dropdown_item-4"><a className="waves-effect waves-light"
                                                href="/real-time">Real Time Processing Framework</a></li>
                                            <li className="dropdown_item-5"><a className="waves-effect waves-light" href="/xml-data">XML
                                                Data Management Framework</a></li>
                                            <li className="dropdown_item-4"><a className="waves-effect waves-light"
                                                href="/ai-powered">AI-Powered Marketing Intelligence</a></li>
                                            <li className="dropdown_item-5"><a className="waves-effect waves-light"
                                                href="/social-media">Social Media Intelligence</a></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item ml-4 dropdown dropdown-8">
                                        <a className="nav-link title" href={Links.Services} data-offset="90">Services</a>

                                        <ul className="dropdown_menu dropdown_menu--animated megamenu dropdown_menu-8">
                                            <li>
                                                <h5>By Industry</h5>
                                                <Link className="tablink waves-effect waves-light" to={Links.AdvancedAnalyticsAi}>Advanced Analytics & AI</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.DataInformation}>Data & Information Management</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.DataEngineering}>Data Engineering & Visualization</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.DataLake}>Data Lake Modernization</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.ProcessAutomation}>Process Automation</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.Cloud}>Cloud</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.Arvr}>AR/VR</Link>

                                            </li>
                                        </ul>
                                        {/* <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                            <li className="dropdown_item-1"><a className="waves-effect waves-light"
                                                href={Links.AdvancedAnalyticsAi}>Advanced Analytics & AI</a></li>
                                            <li className="dropdown_item-2"><a className="waves-effect waves-light"
                                                href={Links.DataInformation}>Data & Information Management</a></li>
                                            <li className="dropdown_item-3"><a className="waves-effect waves-light"
                                                href={Links.DataEngineering}>Data Engineering & Visualization</a></li>
                                            <li className="dropdown_item-4"><a className="waves-effect waves-light"
                                                href={Links.DataLake}>Data Lake Modernization</a></li>
                                            <li className="dropdown_item-5"><a className="waves-effect waves-light"
                                                href={Links.ProcessAutomation}>Process Automation</a></li>
                                            <li className="dropdown_item-5"><a className="waves-effect waves-light"
                                                href={Links.Cloud}>Cloud</a></li>
                                        </ul> */}
                                    </li>
                                    <li className="nav-item ml-4">
                                        <Link className="nav-link title" to={Links.Success} data-offset="90">Success</Link>
                                    </li>

                                    <li className="nav-item ml-4 dropdown dropdown-8">
                                        <a className="nav-link title" href={Links.Industry} data-offset="90">Industry 4.0</a>

                                        <ul className="dropdown_menu dropdown_menu--animated megamenu dropdown_menu-8">
                                            <li>
                                                <h5>By Industry 4.0</h5>
                                                <Link className="tablink waves-effect waves-light" to={Links.SupplyChain2}>Supply Chain</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.Infrastructure}>Infrastructure</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.OilAndGas}>Oil and Gas</Link>
                                                <Link className="tablink waves-effect waves-light" to={Links.Manufacturing}>Manufacturing</Link>

                                            </li>
                                        </ul>
                                    </li>
                                    

                                    <li className="nav-item ml-4">
                                        <Link className="nav-link title" to={Links.About} data-offset="90">About Us</Link>
                                    </li>

                                </ul>
                                {/* <ul className="navbar-nav nav-flex-icons mt-2">
                                    <li className="nav-item ml-3">
                                        <span className="openSearch">
                                            <i className="fas fa-search blue-text"></i>
                                        </span>

                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </nav>
                    <div className="searchSection">
                        <span className="closeIt openSearch">
                            <svg height="30" viewBox="0 0 311 311.07733" width="30" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0" />
                                <path
                                    d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0" />
                            </svg>
                        </span>
                        <div className="form-group">
                            <h6 className="display-6">Search...</h6>
                            <input type="text" placeholder="Search" className="searchfld" />
                        </div>
                    </div>
                    <Wrapper getKey={this.getKey(Links, this.props.history.location.pathname)} />
                </header>
            </>
        )
    }
}
export default withRouter(Header)