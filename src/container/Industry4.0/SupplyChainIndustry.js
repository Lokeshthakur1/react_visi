import React from 'react'
import { Link } from 'react-router-dom'

export default function SupplyChainIndustry() {
    return (
      <main>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <section>
                <h2 className="title mb-md-5 mb-2 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s">SUPPLY CHAIN <span className="font-weight-light">  4.0</span></h2>
                <div className="text-center my-4"><img src="img/Images/supply-chain4.0.png" className="img-fluid industry-image--inner my-margin-10" /></div>
                <h4 className="title my-3 wow fadeIn font-weight-bold" data-wow-delay="0.2s">Plan an effective digital transformation of your supply chain​</h4>
                <p className="text-justify font-16">Supply chain leaders nowadays face new challenges including increasing environmental concerns, more complex operations and aggregating demands for visibility &amp; accountability from all partners.</p>
                <p className="text-justify font-16">Simultaneously digital transformation widens up substantial new scopes for innovation. Supply chain leaders who find a way to combine and capitalize on emerging technologies.</p>
                <p className="text-justify font-16">To drive digital transformation for supply chain leaders, we have developed comprehensive solutions that bring the core values of the digital supply chain to life—quick, simple, and complete.</p>
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <div className="list-group card shadow-md">
                      <h4 className="px-3 title mt-4 mb-2 wow fadeIn font-weight-bold" data-wow-delay="0.2s">How we can Help You?</h4>
                      <p className="px-3 pt-2">Supply chain digital transformation is a proven methodology to drive growth, mitigate risk, and optimize costs but demands strong alignment between business and supply chain strategy.</p>
                      <ol className="list-group list-group-flush py-3 industry-ol--abhi">
                        <li className="list-group-item"><span className="pr-2"><strong>Better Control -</strong></span>Create end-to-end visibility across your entire supply chain.</li>
                        <li className="list-group-item"><span className="pr-2"><strong>Accessibility -</strong></span>Create a connected fleet that you can track &amp; optimize.</li>
                        <li className="list-group-item"><span className="pr-2"><strong>Automation -</strong></span>Deploy Robotic Process Automation (RPA).</li>
                        <li className="list-group-item"><span className="pr-2"><strong>Enhancement -</strong></span>Integrate blockchain into your supply chain.</li>
                        <li className="list-group-item"><span className="pr-2"><strong>Efficiency -</strong></span>Create a digital supply chain twin to manage your entire operation from a single dashboard.</li>
                        <li className="list-group-item"><span className="pr-2"><strong>Optimization -</strong></span>Practice real-time inventory optimization.</li>
                        <li className="list-group-item"><span className="pr-2"><strong>Forecasting -</strong></span>Predict inbound logistics and perform supply &amp; demand forecasting.</li>
                      </ol>
                    </div>
                  </div>
                  <div className="col-md-12 mt-5">
                    <div className="list-group card shadow-md">
                      <h4 className="title mt-4 mb-2 wow fadeIn px-3 font-weight-bold" data-wow-delay="0.2s">AI powered Supply Chain gives you a competitive edge?</h4>
                      <ul className="list-group list-group-flush py-3">
                        <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-dot-circle" /></span>Granular Control</li>
                        <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-dot-circle" /></span>Faster Shipments</li>
                        <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-dot-circle" /></span>Fewer Disruptions</li>
                        <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-dot-circle" /></span>Increased Efficiency</li>
                        <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-dot-circle" /></span>Improved Profitability</li>
                      </ul>
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
