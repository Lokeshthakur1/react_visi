import React from 'react'

export default function index() {
    return (
        <main>
        <div className="container">
          <section className="text-center py-5">
            <h2 className="title mb-md-5 mb-2 wow fadeIn font-weight-bold text-center" data-wow-delay="0.2s" style={{visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s'}}>INDUSTRY 4.0<span className="font-weight-light border-line-white text-white" /></h2>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 col-md-12">
                <div className="industry-item-box">
                  <div className="view overlay industry-item--image">
                    <img alt="Sample image" src="img/Images/supply-chain4.0.png" className="img-fluid" />
                    <div className="mask flex-center blue-gradient-rgba"><a className="btn btn-outline-white btn-rounded" href="/supply-chains">see more</a></div>
                  </div>
                  <div className="industry-item-text-box">
                    <h3 className="text-uppercase text-center font-weight-bold mb-0 industry-item-heading">SUPPLY CHAIN</h3>
                    <p className="industry-item-para">Supply chain digital transformation is a proven methodology to drive growth, mitigate risk, and optimize costs but demands strong alignment between business and supply chain strategy.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-md-12">
                <div className="industry-item-box">
                  <div className="view overlay industry-item--image">
                    <img alt="Sample image" src="img/Images/infra-2.png" className="img-fluid" />
                    <div className="mask flex-center blue-gradient-rgba"><a className="btn btn-outline-white btn-rounded" href="/infrastructure">see more</a></div>
                  </div>
                  <div className="industry-item-text-box">
                    <h3 className="text-uppercase text-center font-weight-bold mb-0 industry-item-heading">INFRUSTRUCTURE</h3>
                    <p className="industry-item-para">AI-defined Infrastructure Management ith smart construction technologies, AI-enabled infrastructure project management can give you a competitive edge and improve margins.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-md-12">
                <div className="industry-item-box">
                  <div className="view overlay industry-item--image">
                    <img alt="Sample image" src="img/Images/oil-and-gas.png" className="img-fluid" />
                    <div className="mask flex-center blue-gradient-rgba"><a className="btn btn-outline-white btn-rounded" href="/oil-and-gas">see more</a></div>
                  </div>
                  <div className="industry-item-text-box">
                    <h3 className="text-uppercase text-center font-weight-bold mb-0 industry-item-heading">OIL AND GAS</h3>
                    <p className="industry-item-para">Industry 4.0 is rapidly transforming the upstream oil &amp; gas industry. Upstream commanders within the arena now face new challenges, a highly dynamic and pan-industry disruption from new technologies.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-md-12">
                <div className="industry-item-box">
                  <div className="view overlay industry-item--image">
                    <img alt="Sample image" src="img/Images/manufacture.png" className="img-fluid" />
                    <div className="mask flex-center blue-gradient-rgba"><a className="btn btn-outline-white btn-rounded" href="/manufacturing">see more</a></div>
                  </div>
                  <div className="industry-item-text-box">
                    <h3 className="text-uppercase text-center font-weight-bold mb-0 industry-item-heading">MANUFACTURING</h3>
                    <p className="industry-item-para">A.I. can be revolutionary in transforming your manufacturing process with the power of advanced control, management, and profitable growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    )
}
