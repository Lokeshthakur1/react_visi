import React from 'react'
import { Link } from 'react-router-dom'

export default function Infrastructure() {
    return (
        <main>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8"> 
              <section>
                <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">DIGITAL INFRASTRUCTURE <span className="font-weight-light"> MANAGEMENT</span></h2>
                <div className="text-center my-4"><img src="img/Images/infra-2.png" className="img-fluid industry-image--inner" /></div>
                <h2 className="title mt-5 mb-4 wow fadeIn font-weight-bold" data-wow-delay="0.2s">Organize, Optimize &amp; Operate robustly complex infrastructure projects with Digital Technologies</h2>
                <h4 className="title my-3 wow fadeIn font-weight-bold" data-wow-delay="0.2s">AI-defined Infrastructure Management</h4>
                <p className="text-justify font-16">With smart construction technologies, increased cost control focus, and shorter turnaround time, AI-enabled infrastructure project management can give you a competitive edge and improve margins.</p>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="industry--inner-main--box">
                      <div className="industry-inner--icon-box"><img src="img/Images/Planning_Demand_Estimation.png" className="industry-inner--icon-box-img" /></div>
                      <h4 className="industry-inner--heading-h4">Planning &amp; Demand Estimation</h4>
                      <p className="industry-inner--para-details">With smart data metrics, analyse the key business performance indicators, the demand trends, the project resource management and predict the project requirements well in time. </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="industry--inner-main--box">
                      <div className="industry-inner--icon-box"><img src="img/Images/Improve_Quality_Profitability.png" className="industry-inner--icon-box-img" /></div>
                      <h4 className="industry-inner--heading-h4">Improve Quality &amp; Profitability</h4>
                      <p className="industry-inner--para-details">Attain profitable turnaround while keeping abreast with the best quality standards. Fine-tune operational routes, task allocation, and resource management with real-time data insights.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="industry--inner-main--box">
                      <div className="industry-inner--icon-box"><img src="img/Images/Resource_Planning_Productivity.png" className="industry-inner--icon-box-img" /></div>
                      <h4 className="industry-inner--heading-h4">Resource Planning &amp; Productivity</h4>
                      <p className="industry-inner--para-details">Deploy the right resources at the right place as deemed fit. Achieve construction efficiencies with smart resource engagement planning. </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="industry--inner-main--box">
                      <div className="industry-inner--icon-box"><img src="img/Images/Building_Information_Control.png" className="industry-inner--icon-box-img" /></div>
                      <h4 className="industry-inner--heading-h4">Building Information Control</h4>
                      <p className="industry-inner--para-details">Identify abnormalities, detect errors, flag project scope creeps way before it’s badly hit and prevent project downtime &amp; resource wastage. </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-4">
              <div className="list-group fanylist_group">
                <div className="rightsidebarHead">Industry 4.0</div>
                <Link className="list-group-item list-group-item-action" to="/supply-chains"> <i className="fas fa-check mr-2" /> <span>Supply Chain</span></Link>
                <Link className="list-group-item list-group-item-action" to="/infrastructure"><i className="fas fa-check mr-2" /> <span>Infrastructure</span></Link>
                <Link className="list-group-item list-group-item-action" to="/oil-and-gas"><i className="fas fa-check mr-2" /> <span>Oil And Gas</span></Link>
                <Link className="list-group-item list-group-item-action" to="/manufacturing"><i className="fas fa-check mr-2" /> <span>Manufacturing</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    )
}
