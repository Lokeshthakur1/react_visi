/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Home from '../container/Home'
import About from '../container/About/About'

import Services from '../container/Services/Services'
import Cloud from '../container/Services/Cloud'
import ProcessAutomation from '../container/Services/ProcessAutomation'
import DataLake from '../container/Services/ProcessAutomation'
import DataEngineering from '../container/Services/DataEngineering'
import AdvancedAnalyticsAi from '../container/Services/AdvancedAnalyticsAi'

import ImprovedRustomerRetention from '../container/Solutions/ImprovedCustomerRetention'
import Chatbots from '../container/Solutions/Chatbots'
import CustomizedInvestments from '../container/Solutions/CustomizedInvestments'
import LifeTimeValuePrediction from '../container/Solutions/LifeTimeValuePrediction'

import ClaimsPredictions from '../container/Solutions/ClaimsPredictions'
import FludemicPrediction from '../container/Solutions/FludemicPrediction'
import DrugRecovery from '../container/Solutions/DrugRecovery'
import RiskProfileAnalyzer from '../container/Solutions/RiskProfileAnalyzer'

import SmartRiskPredictorAgileProcess from '../container/Solutions/SmartRiskPredictorAgileProcess'
import SuccessThroughSprints from '../container/Solutions/SuccessThroughSprints'
import ImprovementThroughDeepLearning from '../container/Solutions/ImprovementThroughDeepLearning'
import BusinessModelMakeover from '../container/Solutions/BusinessModelMakeover'
import StayingAheadCurveWith from '../container/Solutions/StayingAheadCurveWithAI'

import InventoryManage from '../container/Solutions/InventoryManage'
import AdaptiveHomepage from '../container/Solutions/AdaptiveHomepage'
import ConversationalSupport from '../container/Solutions/ConversationalSupport'
import DemandForecasting from '../container/Solutions/DemandForecasting'

import DrillingNptPredictor from '../container/Solutions/DrillingNptPredictor'
import IncidentAnalyzerPredictor from '../container/Solutions/IncidentAnalyzerPredictor'

import IntelligentDemandForecast from '../container/Solutions/IntelligentDemandForecast'

import TranspPlatform from '../container/Solutions/TranspPlatform'
import PandemicCrowdControl from '../container/Solutions/PandemicCrowdControl'
import PredictiveMaintenance from '../container/Solutions/PredictiveMaintenance'

import AirPollutionMonitoringPrediction from '../container/Solutions/AirPollutionMonitoringPrediction'

import Industries from '../container/Industries/Industries'
import Banking from '../container/Industries/Banking'
import Healthcare from '../container/Industries/Healthcare'
import Hightech from '../container/Industries/Hightech'
import Retail from '../container/Industries/Retail'
import Oilgas from '../container/Industries/Oilgas'
import Utility from '../container/Industries/Utility'
import TranspAndLogistic from '../container/Industries/TranspAndLogistic'
import Environmental from '../container/Industries/Environmental'
import ClinicalTrial from '../component/ClinicalTrial'
import BusinessProcess from '../component/BusinessProcess'
import AiPoweredProcessing from '../component/AiPoweredProcessing'
import Solution from '../component/Solution'
import CustomerEngage from '../component/CustomerEngage'
import CustomerInsights from '../component/CustomerInsights'
import DecisionSupports from '../component/DecisionSupports'
import DocumentProcessing from '../component/DocumentProcessing'
import ImplementHealthcare from '../component/ImplementHealthcare'
import Enterprise from '../component/Enterprise'
import EmailAutomation from '../component/EmailAutomation'
import PrivacyPolicy from '../component/PrivacyPolicy'
import RealTime from '../component/RealTime'
import ReductionNotPerforming from '../component/ReductionNotPerforming'
import RespResearchDev from '../component/RespResearchDev'
import SmartCheque from '../component/SmartCheque'
import SmartOptimization from '../component/SmartOptimization'
import SocialMedia from '../component/SocialMedia'
import SoftwareServices from '../component/SoftwareServices'
import DataInformation from '../container/Services/DataInformation'
import AiProwered from '../component/AiPowered'
import TravelHospitality from '../container/Industries/TravelHospitality'
import ItItes from '../container/Industries/ItItes'
import Marketing from '../container/Industries/Marketing'
import HumanRecource from '../container/Industries/HumanRecource'
import SafetySecurity from '../container/Industries/SafetySecurity'

import AiPoweredBot from '../container/Industries/AiPoweredBot'
import RiskAssesment from '../container/Industries/RiskAssesment'
import DigitalOutreach from '../container/Industries/DigitalOutreach'
import CustomerSegmentation from '../container/Industries/CustomerSegmentation'

import EmployeeAttr from '../container/Industries/EmployeeAttr'
import EmployeeEngagement from '../container/Industries/EmployeeEngagement'
import EmployeeProductivity from '../container/Industries/EmployeeProductivity'

import Finance from '../container/Industries/Finance'
import RetailsCaseStudies from '../container/Industries/RetailsCaseStudies'

import CollaborativeHealth from '../container/Industries/CollaborativeHealth'
import PopulationHealthcare from '../container/Industries/PopulationHealthcare'
import PreventiveHealthcare from '../container/Industries/PreventiveHealthcare'
import VirtualClinic from '../container/Industries/VirtualClinic'
import DiseasePrognosisAssessment from '../container/Industries/DiseasePrognosisAssessment'
import PrecisionMedicinePlatformAdma from '../container/Industries/PrecisionMedicinePlatformAdma'
import PrecisionMedicinePlatformEcosystem from '../container/Industries/PrecisionMedicinePlatformEcosystem'
import PrecisionMedicinePlatformPropotion from '../container/Industries/PrecisionMedicinePlatformPropotion'
import PriceOptimizationEngine from '../container/Industries/PriceOptimizationEngine'

import NonPerformingAssetPrediction from '../container/Industries/NonPerformingAssetPrediction'
import KYCAMLCustomOnBoarding from '../container/Industries/KYCAMLCustomOnBoarding'
import AIPoweredProspectTargeting from '../container/Industries/AIPoweredProspectTargeting'
import MultiChannelChurn from '../container/Industries/MultiChannelChurn'
import InternationalArbitrageTrading from '../container/Industries/InternationalArbitrageTrading'

import SmartTransportSolution from '../container/Industries/SmartTransportSolution'
import DemandSupplyHyperLogistics from '../container/Industries/DemandSupplyHyperLogistics'
import IntraCityFreightFlow from '../container/Industries/IntraCityFreightFlow'

import AdobeCaseStudy from '../container/Industries/AdobeCaseStudy'
import TransportRouteOptimization from '../container/Industries/TransportRouteOptimization'
import InsurancePolicyRenewability from '../container/Industries/InsurancePolicyRenewability'
import Sales from '../container/Industries/Sales'
import SupplyChain from '../container/Industries/SupplyChain'

import { Links } from './links'
import XmlData from '../component/XmlData'

import DataDriven from '../component/DataDriven'

import Success from '../container/success/Success'
import Arvr from '../container/Industries/Arvr'
import Engineering from '../container/Industries/Engineering'

import Industry from '../container/Industry4.0'
import OilAndGas from '../container/Industry4.0/OilAndGas'
import Manufacturing from '../container/Industry4.0/Manufacturing'
import Infrastructure from '../container/Industry4.0/Infrastructure'
import SupplyChainIndustry from '../container/Industry4.0/SupplyChainIndustry'
// import Engineeringpage from '../container/Industries/Engineeringpage'



export default function index() {
    return (
        <Route path={'/app'} >

            <>
            <Header />
            <a href="#scrollPage" className="scroll-btn jump-2"><img alt="img" src="img/svg/arrow.svg" /></a>
            <Switch>

                {/* service */}
                <Route path={Links.Services} component={Services} />
                <Route path={Links.Cloud} component={Cloud} />
                <Route path={Links.ProcessAutomation} component={ProcessAutomation} />
                <Route path={Links.DataLake} component={DataLake} />
                <Route path={Links.DataEngineering} component={DataEngineering} />
                <Route path={Links.AdvancedAnalyticsAi} component={AdvancedAnalyticsAi} />
                <Route path={Links.Contact} component={About} />


                {/* solution */}
                {/* banking */}
                <Route path={Links.ImprovedRustomerRetention} component={ImprovedRustomerRetention} />
                <Route path={Links.Chatbots} component={Chatbots} />
                <Route path={Links.CustomizedInvestments} component={CustomizedInvestments} />
                <Route path={Links.LifeTimeValuePrediction} component={LifeTimeValuePrediction} />

                {/* healthcare */}
                <Route path={Links.ClaimsPredictions} component={ClaimsPredictions} />
                <Route path={Links.FludemicPrediction} component={FludemicPrediction} />
                <Route path={Links.DrugRecovery} component={DrugRecovery} />
                <Route path={Links.RiskProfileAnalyzer} component={RiskProfileAnalyzer} />

                {/* hightech */}
                <Route path={Links.SmartRiskPredictorAgileProcess} component={SmartRiskPredictorAgileProcess} />
                <Route path={Links.SuccessThroughSprints} component={SuccessThroughSprints} />
                <Route path={Links.ImprovementThroughDeepLearning} component={ImprovementThroughDeepLearning} />
                <Route path={Links.BusinessModelMakeover} component={BusinessModelMakeover} />
                <Route path={Links.StayingAheadCurveWith} component={StayingAheadCurveWith} />

                {/* retail */}
                <Route path={Links.InventoryManage} component={InventoryManage} />
                <Route path={Links.AdaptiveHomepage} component={AdaptiveHomepage} />
                <Route path={Links.ConversationalSupport} component={ConversationalSupport} />
                <Route path={Links.DemandForecasting} component={DemandForecasting} />

                {/* oilgas */}
                <Route path={Links.DrillingNptPredictor} component={DrillingNptPredictor} />
                <Route path={Links.IncidentAnalyzerPredictor} component={IncidentAnalyzerPredictor} />

                {/* utility */}
                <Route path={Links.IntelligentDemandForecast} component={IntelligentDemandForecast} />

                {/* transpAndLogistic */}
                <Route path={Links.TranspPlatform} component={TranspPlatform} />
                <Route path={Links.PandemicCrowdControl} component={PandemicCrowdControl} />
                <Route path={Links.PredictiveMaintenance} component={PredictiveMaintenance} />

                {/* environmental */}
                <Route path={Links.AirPollutionMonitoringPrediction} component={AirPollutionMonitoringPrediction} />

                {/* industries */}
                <Route path={Links.Industries} component={Industries} />
                <Route path={Links.Banking} component={Banking} />
                <Route path={Links.Healthcare} component={Healthcare} />
                <Route path={Links.Hightech} component={Hightech} />
                <Route path={Links.Retail} component={Retail} />
                <Route path={Links.Oilgas} component={Oilgas} />
                <Route path={Links.Utility} component={Utility} />
                <Route path={Links.TranspAndLogistic} component={TranspAndLogistic} />
                <Route path={Links.Environmental} component={Environmental} />
                <Route path={Links.TravelHospitality} component={TravelHospitality} />
                <Route path={Links.ItItes} component={ItItes} />
                <Route path={Links.Marketing} component={Marketing} />
                <Route path={Links.HumanRecource} component={HumanRecource} />
                <Route path={Links.SafetySecurity} component={SafetySecurity} />


                {/* others */}

                <Route path={Links.ClinicalTrial} component={ClinicalTrial} />
                <Route path={Links.BusinessProcess} component={BusinessProcess} />
                <Route path={Links.AiPoweredProcessing} component={AiPoweredProcessing} />
                <Route path={Links.CustomerEngage} component={CustomerEngage} />
                <Route path={Links.CustomerInsights} component={CustomerInsights} />
                <Route path={Links.DecisionSupports} component={DecisionSupports} />
                <Route path={Links.DocumentProcessing} component={DocumentProcessing} />
                <Route path={Links.ImplementHealthcare} component={ImplementHealthcare} />
                <Route path={Links.Enterprise} component={Enterprise} />
                <Route path={Links.EmailAutomation} component={EmailAutomation} />
                <Route path={Links.PrivacyPolicy} component={PrivacyPolicy} />
                <Route path={Links.RealTime} component={RealTime} />
                <Route path={Links.ReductionNotPerforming} component={ReductionNotPerforming} />
                <Route path={Links.RespResearchDev} component={RespResearchDev} />
                <Route path={Links.SmartCheque} component={SmartCheque} />
                <Route path={Links.SmartOptimization} component={SmartOptimization} />
                <Route path={Links.SocialMedia} component={SocialMedia} />
                <Route path={Links.SoftwareServices} component={SoftwareServices} />
                <Route path={Links.Solution} component={Solution} />
                <Route path={Links.AiPowered} component={AiProwered} />
                <Route path={Links.DataInformation} component={DataInformation} />
                <Route path={Links.XmlData} component={XmlData} />
                <Route path={Links.DataDriven} component={DataDriven} />

                <Route path={Links.AiPoweredBot} component={AiPoweredBot} />
                <Route path={Links.RiskAssesment} component={RiskAssesment} />
                <Route path={Links.DigitalOutreach} component={DigitalOutreach} />
                <Route path={Links.CustomerSegmentation} component={CustomerSegmentation} />

                <Route path={Links.EmployeeAttr} component={EmployeeAttr} />
                <Route path={Links.EmployeeEngagement} component={EmployeeEngagement} />
                <Route path={Links.EmployeeProductivity} component={EmployeeProductivity} />
                <Route path={Links.Finance} component={Finance} />
                <Route path={Links.RetailsCaseStudies} component={RetailsCaseStudies} />
                <Route path={Links.CollaborativeHealth} component={CollaborativeHealth} />
                <Route path={Links.PopulationHealthcare} component={PopulationHealthcare} />
                <Route path={Links.PreventiveHealthcare} component={PreventiveHealthcare} />
                <Route path={Links.VirtualClinic} component={VirtualClinic} />
                <Route path={Links.DiseasePrognosisAssessment} component={DiseasePrognosisAssessment} />
                <Route path={Links.PrecisionMedicinePlatformAdma} component={PrecisionMedicinePlatformAdma} />
                <Route path={Links.PrecisionMedicinePlatformEcosystem} component={PrecisionMedicinePlatformEcosystem} />
                <Route path={Links.PrecisionMedicinePlatformPropotion} component={PrecisionMedicinePlatformPropotion} />
                <Route path={Links.PriceOptimizationEngine} component={PriceOptimizationEngine} />

                <Route path={Links.NonPerformingAssetPrediction} component={NonPerformingAssetPrediction} />
                <Route path={Links.KYCAMLCustomOnBoarding} component={KYCAMLCustomOnBoarding} />
                <Route path={Links.AIPoweredProspectTargeting} component={AIPoweredProspectTargeting} />
                <Route path={Links.MultiChannelChurn} component={MultiChannelChurn} />
                <Route path={Links.InternationalArbitrageTrading} component={InternationalArbitrageTrading} />

                <Route path={Links.SmartTransportSolution} component={SmartTransportSolution} />
                <Route path={Links.DemandSupplyHyperLogistics} component={DemandSupplyHyperLogistics} />
                <Route path={Links.IntraCityFreightFlow} component={IntraCityFreightFlow} />

                <Route path={Links.AdobeCaseStudy} component={AdobeCaseStudy} />
                <Route path={Links.TransportRouteOptimization} component={TransportRouteOptimization} />
                <Route path={Links.InsurancePolicyRenewability} component={InsurancePolicyRenewability} />
                <Route path={Links.Sales} component={Sales} />
                <Route path={Links.SupplyChain} component={SupplyChain} />

                <Route path={Links.Success} component={Success} />
                <Route path={Links.Arvr} component={Arvr} />
                <Route path={Links.Engineering} component={Engineering} />
                {/* <Route path={Links.Engineeringpage} component={Engineeringpage} /> */}

                {/* {Industry 4.0 } */}

                <Route path={Links.Industry} component={Industry} />
                <Route path={Links.Infrastructure} component={Infrastructure} />
                <Route path={Links.OilAndGas} component={OilAndGas} />
                <Route path={Links.Manufacturing} component={Manufacturing} />
                <Route path={Links.SupplyChain2} component={SupplyChainIndustry} />


                <Route path={Links.About} component={About} />
                <Route path={'/home'} component={Home}></Route>
                <Route path='/' exact component={Home}></Route>

                <Redirect from='*' to="/" />
            </Switch>
            <Footer />
            </>
        </Route>
    )
}
