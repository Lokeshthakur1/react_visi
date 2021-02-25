import React from 'react'
import { Link } from 'react-router-dom'

export default function Manufacturing() {
    return (
        <main>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <section>
                  <h2 className="title mb-md-5 mb-2 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">DIGITAL MANUFACTURING</h2>
                  <div className="text-center my-4"><img src="img/Images/manufacture.png" className="img-fluid industry-image--inner" /></div>
                  <h4 className="title my-3 wow fadeIn font-weight-bold" data-wow-delay="0.2s">AI is introducing flexibility &amp; scalability with digital manufacturing​</h4>
                  <p className="text-justify font-16">A.I. can be revolutionary in transforming your manufacturing process with the power of advanced control, management, and profitable growth.</p>
                  <p className="text-justify font-16">Digital manufacturing methods involve automated control of the entire value chain, scrutinize, and traces data to indicate areas of improvement. It also empowers businesses with deep-dive data and learnings about the manufacturing processes to aid smart decision making. </p>
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <div className="list-group card shadow-md">
                        <h4 className="px-3 title mt-4 mb-2 wow fadeIn font-weight-bold" data-wow-delay="0.2s">Industry 4.0 converges IT (Information Technology) and OT (Operational Technology), to form a cyber-physical environment.</h4>
                        <p className="px-3 pt-2 font-16">To enable digital transformation for manufacturing leaders, we’ve developed comprehensive solutions that offer the core values of digital manufacturing to life—quick, simple, and complete.</p>
                        <ol className="list-group list-group-flush py-3">
                          <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-check-circle" /></span>Automate core production &amp; governance processes.</li>
                          <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-check-circle" /></span>Adapt fundamental business models to new market realities.</li>
                          <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-check-circle" /></span>Deploy a variety of connected devices.</li>
                          <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-check-circle" /></span>Connect all machines, systems, and products.</li>
                          <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-check-circle" /></span>Monitor &amp; manage an escalating volume of knowledge.</li>
                          <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-check-circle" /></span>Derive actionable insight from operational metrics.</li>
                          <li className="list-group-item list-group-item--abhi"><span className="pr-3"><i className="far fa-check-circle" /></span>Simplify and streamline day-to-day work.</li>
                        </ol>
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
