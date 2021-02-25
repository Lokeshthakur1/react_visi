import React from 'react'
import { Link } from 'react-router-dom'

export default function OilAndGas() {
    return (
        <main>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <section>
                <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">A.I IN OIL &amp; GAS <span className="font-weight-light"> INDUSTRY</span></h2>
                <div className="text-center my-4"><img src="img/Images/oil-and-gas.png" className="img-fluid industry-image--inner my-margin-10" /></div>
                <h4 className="title my-3 wow fadeIn font-weight-bold my-margin-5" data-wow-delay="0.2s">From boardroom planning to in-field oil &amp; gas exploration, AI can help achieve better results</h4>
                <p className="text-justify font-16">Upstream activities are often done more efficiently when functional teams involved in locating and producing crude and fossil fuel work together from a customary playbook. Digital technologies can aid oil and gas companies streamline and integrate their upstream operations.</p>
                <h4 className="title my-3 wow fadeIn font-weight-bold my-margin-5" data-wow-delay="0.2s">Unleash Efficiency Across the Oil &amp; Gas Value Chain</h4>
                <p className="text-justify font-16">Industry 4.0 is rapidly transforming the upstream oil &amp; gas industry. Upstream commanders within the arena now face new challenges, a highly dynamic, critical production environment, risk &amp; safety regulations, and pan-industry disruption from new technologies.</p>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="industry--inner-main--box">
                      <div className="industry-inner--icons-box"><i className="fas fa-cog" /></div>
                      <h4 className="industry-inner--heading-h4 text-center">Improve the assembly rate and run lifetime of upstream systems.</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="industry--inner-main--box">
                      <div className="industry-inner--icons-box"><i className="fas fa-water" /></div>
                      <h4 className="industry-inner--heading-h4 text-center">Upgrade process effectiveness of all wells, flow lines, and surface production.</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="industry--inner-main--box">
                      <div className="industry-inner--icons-box"><i className="far fa-file" /></div>
                      <h4 className="industry-inner--heading-h4 text-center">Log files to Identify the root causes and key drivers behind their failure events.</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="industry--inner-main--box">
                      <div className="industry-inner--icons-box"><i className="far fa-building" /></div>
                      <h4 className="industry-inner--heading-h4 text-center">Manage changing reservoir conditions and timely predictions to help planning</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="industry--inner-main--box">
                      <div className="industry-inner--icons-box"><i className="far fa-clipboard" /></div>
                      <h4 className="industry-inner--heading-h4 text-center">Unify oilfield headquarters with field sites through edge computing.</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="industry--inner-main--box">
                      <div className="industry-inner--icons-box"><i className="fas fa-briefcase" /></div>
                      <h4 className="industry-inner--heading-h4 text-center">Better monitor and manage fluids movements and resource utilization</h4>
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
