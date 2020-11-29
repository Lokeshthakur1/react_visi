/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
export default class About extends Component {
    render() {
        return (
            <main>
                <section id="about_visionize" className="section feature-box wow fadeIn position-relative" data-wow-delay="0.2s">
                    {/* <img alt="img" className="guyTablet" src="img/svg/guy_with_tablet.svg" /> */}
                    <div className="flex-center view">
                        <div className="container py-3">
                            {/*Section heading*/}
                            <h2 className="title my-5 wow fadeIn font-weight-bold animated text-center"
                                data-wow-delay="0.2s"
                                style={{ visibility: "visible", animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                About<span className="font-weight-light border-line"> VisionAIze</span>
                            </h2>
                            <div className="row features-small py-5">
                                <ul className="newFancy_list col-md-10 text-left">
                                    <li><span><i className="fas fa-check"></i></span>VisionAize is a Silicon Valley based company focusing on creating smarter and intelligent enterprises.</li>
                                    <li><span><i className="fas fa-check"></i></span>100+ AI & Data Engineering Experts (Data Scientists, Ai Experts, Cloud & Data engineers)</li>
                                    <li><span><i className="fas fa-check"></i></span>Decades of combined experience</li>
                                    <li><span><i className="fas fa-check"></i></span>Global reach with offices in Silicon Valley and India.</li>
                                    <li><span><i className="fas fa-check"></i></span>Proven experience with fortune 500 customers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section py-5 wow fadeIn blue box-ourPromise position-relative" data-wow-delay=" 0.2s">
                    <div className="container py-5">
                        <div className="w-100">
                            <h2 className="title my-5 wow fadeIn text-center font-weight-bold text-white" data-wow-delay="0.2s">
                                OUR <span className="font-weight-light border-line-white text-white">PROMISE</span>
                            </h2>
                            <p className="text-center mb-3 wow text-white fadeIn" data-wow-delay="0.2s">
                                VisionAize offers world class AI powered solutions to empower data driven businesses with high an accuracy results.</p>
                        </div>
                        <div className="row features wow fadeIn my-5 pt-5" data-wow-delay="0.2s">
                            <a href="#" className="col-lg-4 text-center hoverable p-4">
                                <div className="icon-area">
                                    <div>
                                        <img alt="img" src="img/svg/001-workflow.svg" width="50px" />
                                    </div>
                                    <br />
                                    <h5 className="mt-2 font-weight-bold text-white">Data Science</h5>
                                    <ul className="mt-1 px-3 text-left  text-white">
                                        <li>You get access to our large team of experts</li>
                                        <li>Experienced with all forms of data engineering and analysis</li>
                                        <li>Skilled at data migration and cloud-scale data manipulation</li>
                                    </ul>
                                </div>
                            </a>
                            <a href="#" className="col-lg-4 text-center hoverable p-4">
                                <div className="icon-area">
                                    <div>
                                        <img alt="img" src="img/svg/002-innovation.svg" width="50px" />
                                    </div>
                                    <br />
                                    <h5 className="mt-2 font-weight-bold text-white">AI Solutions</h5>
                                    <ul className="mt-1 px-3 text-left  text-white">
                                        <li>AI + RPA</li>
                                        <li>Multiple AI algorithms optimized for every use case and industries.</li>
                                        <li>Works across ALL the data you have, not just numeric.</li>
                                    </ul>
                                </div>
                            </a>
                            <a href="#" className="col-lg-4 text-center hoverable p-4">
                                <div className="icon-area">
                                    <div>
                                        <img alt="img" src="img/svg/003-concept.svg" width="50px" />
                                    </div>
                                    <br />
                                    <h5 className="mt-2 font-weight-bold text-white">Experience</h5>
                                    <ul className="mt-1 px-3 text-left text-white">
                                        <li>Decades of experience in data management.</li>
                                        <li>We have always been pioneers of new technology & approaches</li>
                                        <li>Our team combines all the skills you need for a successful project</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section id="why_visionize" className="section feature-box aipower">
                    <div className="flex-center view">
                        <div className="container py-3">
                            {/*Section heading*/}
                            <h2 className="title my-5 wow fadeIn font-weight-bold animated text-center text-white"
                                data-wow-delay="0.2s"
                                style={{ visibility: "visible", animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                WHY<span className="font-weight-light border-line-white text-white"> VisionAIze</span>
                            </h2>
                            <div className="row features-small py-5">
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img alt="img" className="mx-auto" src="img/svg/datascientist.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Expert and Experienced Data Scientists
                     </h5>
                                        <p className="text-white">Our Big Data Solutions are developed and deployed by highly
                                        experienced teams with over 200+ years of combined experience.
                     </p>
                                    </div>
                                </a>
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img alt="img" className="mx-auto" src="img/svg/analytics.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Expert Marketing Intelligence<br />Solutions
                     </h5>
                                        <p className="text-white">With our extensive experience and expertise on multiple marketing
                                        scenarios we can Rapidly develop marketing intelligence solution.
                     </p>
                                    </div>
                                </a>
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img alt="img" className="mx-auto" src="img/svg/multidomain.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Multi-Domain<br />Knowledge
                     </h5>
                                        <p className="text-white">Expertise in customizing data analytics solutions for different
                                        domains by targeting and resolving domain-specific challenges.
                     </p>
                                    </div>
                                </a>
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img alt="img" className="mx-auto" src="img/svg/settings.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Unparalleled Data<br />Harmonization</h5>
                                        <p className="text-white">Ability to access and convert disparate data from multiple sources
                                        and make them ready for advanced data analytics.
                     </p>
                                    </div>
                                </a>
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img alt="img" className="mx-auto" src="img/svg/idea.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Mapping Meaningful<br />Outcomes
                     </h5>
                                        <p className="text-white">Intelligent platforms and technological components hard-wired to
                                        deliver business outcomes critical for increasing bottom line and market share.
                     </p>
                                    </div>
                                </a>
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img alt="img" className="mx-auto" src="img/svg/innovation.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Technological Expertise with<br />Innovative
                        Approach
                     </h5>
                                        <p className="text-white">Choosing the most effective set of technological capabilities to
                                        deliver a solution that meets your needs and gives your business a competitive edge.
                     </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">

                    {/* Section: About 2*/}
                    <section id="about" className="section about pb-3 wow fadeIn" data-wow-delay="0.2s">
                        {/* Grid row */}
                        <div className="row pt-4 mt-5">
                            {/* Grid column */}
                            <div className="col-lg-12 col-md-12 wow fadeIn text-center mb-5" data-wow-delay="0.4s">
                                {/* Secion heading */}
                                <h2 className="title wow fadeIn text-center font-weight-bold mb-5" data-wow-delay="0.2s">
                                    OUR<span className="font-weight-light border-line"> VISION</span>
                                </h2>
                                {/* Description */}
                                <p>We help companies Build Intelligent Enterprises by leveraging the emerging
                                and next-generation technologies to accelerate digital transformation and speed of
                                innovation to provide competitive advantage and success as the Enterprise of Tomorrow.
               </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            {/* 
            <div className="col-lg-12 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s">
               <img alt="img" src="img/svg/our-mission2.svg" className="img-fluid"/>
            </div>
            */}
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                        <div className="ourVision my-5">
                            <span className="text-primary">Customer</span>
                            <span className="text-second">Product</span>
                            <span className="text-primary">People</span>
                            <span className="text-second">Cost</span>
                            <span className="text-primary">Revenue</span>
                            <span className="text-second">Growth</span>
                        </div>
                    </section>
                    <hr />
                </div>

                <section className="section ">
                    <div className="container py-3">
                        <h2 className="title my-5 wow fadeIn font-weight-bold animated text-center "
                            data-wow-delay="0.2s"
                            style={{ visibility: "visible", animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            Our<span className="font-weight-light border-line"> Team</span>
                        </h2>
                        <div className="row pt-4">
                            <div className="col-md-4 mb-4">
                                <div className="imageHolder_">
                                    <div className="imgshow"><img alt="img" src="img/team/1.jpg" /></div>
                                    <div className="contentShow">
                                        <h5>Dr. Romesh Japra</h5>
                                        <span>Chairman</span>
                                        <p>He is as internationally recognized  cardiologist, entrepreneur., publisher and community leader. He has been ranked among top 20% doctors in North America with specialization in cardiovascular disease and internal medicine</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="imageHolder_">
                                    <div className="imgshow"><img alt="img" src="img/team/2.jpg" /></div>
                                    <div className="contentShow">
                                        <h5>Vikas Agrawal</h5>
                                        <span>CEO</span>
                                        <p>Serial Entrepreneur Investor Board Advisor to several Tech Start Ups and University of SFSU. Two decades of experience as Business Innovation and Transformation leader</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="imageHolder_">
                                    <div className="imgshow"><img alt="img" src="img/team/3.jpg" /></div>
                                    <div className="contentShow">
                                        <h5>Subhash Sachdeva</h5>
                                        <span>CFO</span>
                                        <p>He has decades of extensive operational financial and leadership experience and a demonstrated track record of building high performing companies via successful M&A initiatives.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="imageHolder_">
                                    <div className="imgshow"><img alt="img" src="img/team/4.jpeg" /></div>
                                    <div className="contentShow">
                                        <h5>Sanjoy Chatterjee</h5>
                                        <span>CTO</span>
                                        <p>An engineer with experiences from TATA Motors and Tata Technologies, Sanjoy started his entrepreneurial journey 13 years ego, founding Ideation Technology Solutions, Ideal Analytics Solutions and startups in the areas of Healthcare Genomics [Biogenick] and Environment Tech [Enviome Research] developing software products & solutions in the areas of Analytics & Data Science, IoT and Enterprise Mobility. Sanjoy is also the Chair of NASSCOM's Special Interest Group of Analytics. Sanjoy received his M.Tech from Indian Institute of Technology, Kharagpur.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="imageHolder_">
                                    <div className="imgshow"><img alt="img" src="img/team/6.jpg" /></div>
                                    <div className="contentShow">
                                        <h5>Sukumar Chakraborty</h5>
                                        <span>Chief Technical Architect</span>
                                        <p>Over 22 years of work experience in the IT industry including 17 years as product architect. Sukumar is an M.Tech (Computer Science) from Indian Statistical Institute, Kolkata and has held positions ranging from system analyst to technical architect across organizations including the likes of Tata Consultancy Services and Wipro Technologies. He has published some of his works in international journals like IEEE Transactions, International Journal of Neural Networks, etc. these ideas have been deployed in various works in the field of data mining and sensor networks. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="imageHolder_">
                                    <div className="imgshow"><img alt="img" src="img/team/5.jpg" /></div>
                                    <div className="contentShow">
                                        <h5>Shvon Mukherkee</h5>
                                        <span>Business Head, India</span>
                                        <p>25 years of experience in Business & IT consulting. Worked as Executive Director of IBM and Partner / Executive Director in PricewaterhouseCoopers (PwC) Consulting Services.
                                        Shovon became a partner in PwC in 1999 and moved to IBM in October 2002. He rejoined PwC in 2008. Over the last 12 years, Shovon has had various leadership roles in PwC and IBM. In his last role, Shovon focused on the Oracle business for India and worked across technologies in major transformational initiatives/projects. He also led the retail and consumer industry sector for PwC within consulting.
</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                {/*             
   <div className="container-fluid citybg px-0">
      <div className="container">
         <section id="about" className="section about mb-5 py-3 wow fadeIn" data-wow-delay="0.2s">
            <div className="row wow w-100 px-2 py-5 justify-content-center fadeIn" data-wow-delay="0.4s">
               <div className="text-left col-md-4 mb-3 px-2">
                  <div className="round_img">
                     <span>
                     <img alt="img" src="https://www.wallpaperup.com/uploads/wallpapers/2014/04/22/341408/666728946176c86ffcfc8e365f1d6668-700.jpg"
                        className="img_bg"/>
                     </span>
                     <h6>Silicon Valley based company focusing on creating smarter and intelligent
                        enterprises.
                     </h6>
                  </div>
               </div>
               <div className="text-left col-md-4 mb-3 px-2">
                  <div className="round_img">
                     <span>
                     <img alt="img" src="https://www.newhorizons.com/Portals/278/Images/Blog/How-to-Become-a-Network-Engineer.jpg"
                        className="img_bg"/>
                     </span>
                     <h6>100+ AI & Data Engineering Experts (Data Scientists, AI Experts, Cloud & Data
                        engineers)
                     </h6>
                  </div>
               </div>
               <div className="text-left col-md-4 mb-3 px-2">
                  <div className="round_img">
                     <span>
                     <img alt="img" src="https://www.furnessphotography.com/wp-content/uploads/2020/01/2.png"
                        className="img_bg"/>
                     </span>
                     <h6>Decades of combined experience.</h6>
                  </div>
               </div>
               <div className="text-left col-md-4 mb-3 px-2">
                  <div className="round_img">
                     <span>
                     <img alt="img" src="https://www.siliconvalleymeetsswitzerland.com/archiv/2015/img/backgrounds/1.jpg"
                        className="img_bg"/>
                     </span>
                     <h6>Global reach with offices in Silicon Valley and India.</h6>
                  </div>
               </div>
               <div className="text-left col-md-4 mb-3 px-2">
                  <div className="round_img">
                     <span>
                     <img alt="img" src="https://www.incimages.com/uploaded_files/image/970x450/getty_897748630_404888.jpg"
                        className="img_bg"/>
                     </span>
                     <h6>Proven experience with Fortune 500 customers.</h6>
                  </div>
               </div>
            </div>
         </section>
      </div>
   </div>
   */}

                {/* Section: About 2*/}
                {/*Section: Team*/}
                {/* 
   <section className="section team-section pb-5 mb-4">
      <h2 className="title my-5 wow fadeIn text-center font-weight-bold" data-wow-delay="0.2s">
         MEET OUR <span className="font-weight-light">AMAZING TEAM</span>
      </h2>
      <section className="text-center dark-grey-text">
         <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
               <div className="card testimonial-card">
                  <div className="card-up info-color"></div>
                  <div className="avatar mx-auto white">
                     <img alt="img" src="img/team/1.jpg" className="rounded-circle img-fluid"/>
                  </div>
                  <div className="card-body">
                     <h4 className="font-weight-bold">Dr. Romesh Japra</h4>
                     <h6 className="font-weight-bold mb-4">Chairman of the Board</h6>
                     <hr/>
                     <p className="dark-grey-text text-left mt-4"><i className="fas fa-quote-left pr-2"></i>He is
                        an
                        internationally recognized cardiologist....
                     </p>
                     <a href="solution_railroad.html" className="black-text d-flex justify-content-end">
                        <h5>Read more <i className="fas fa-angle-double-right"></i></h5>
                     </a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
               <div className="card testimonial-card">
                  <div className="card-up blue-gradient">
                  </div>
                  <div className="avatar mx-auto white">
                     <img alt="img" src="img/team/2.jpg" className="rounded-circle img-fluid"/>
                  </div>
                  <div className="card-body">
                     <h4 className="font-weight-bold">Vikas Agrawal</h4>
                     <h6 className="font-weight-bold mb-4">CEO</h6>
                     <hr/>
                     <p className="dark-grey-text text-left mt-4"><i
                        className="fas fa-quote-left pr-2"></i>Serial Entrepreneur, Investor, Board
                        Advisor....
                     </p>
                     <a href="solution_railroad.html" className="black-text d-flex justify-content-end">
                        <h5>Read more <i className="fas fa-angle-double-right"></i></h5>
                     </a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
               <div className="card testimonial-card">
                  <div className="card-up indigo"></div>
                  <div className="avatar mx-auto white">
                     <img alt="img" src="img/team/3.jpg" className="rounded-circle img-fluid"/>
                  </div>
                  <div className="card-body">
                     <h4 className="font-weight-bold">Subhash Sachdeva</h4>
                     <h6 className="font-weight-bold mb-4">CFO</h6>
                     <hr/>
                     <p className="dark-grey-text text-left mt-4"><i className="fas fa-quote-left pr-2"></i>He
                        has decades of extensive operational, financial and leadership....
                     </p>
                     <a href="solution_railroad.html" className="black-text d-flex justify-content-end">
                        <h5>Read more <i className="fas fa-angle-double-right"></i></h5>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
               <div className="card testimonial-card">
                  <div className="card-up info-color"></div>
                  <div className="avatar mx-auto white">
                     <img alt="img" src="img/team/4.jpg" className="rounded-circle img-fluid"/>
                  </div>
                  <div className="card-body">
                     <h4 className="font-weight-bold">Sanjay Chatterjee</h4>
                     <h6 className="font-weight-bold mb-4">CTO</h6>
                     <hr/>
                     <p className="dark-grey-text text-left mt-4"><i className="fas fa-quote-left pr-2"></i>A
                        Technical and Innovation guru in the true sense. An IIT....
                     </p>
                     <a href="solution_railroad.html" className="black-text d-flex justify-content-end">
                        <h5>Read more <i className="fas fa-angle-double-right"></i></h5>
                     </a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
               <div className="card testimonial-card">
                  <div className="card-up blue-gradient">
                  </div>
                  <div className="avatar mx-auto white">
                     <img alt="img" src="img/team/5.jpg" className="rounded-circle img-fluid"/>
                  </div>
                  <div className="card-body">
                     <h4 className="font-weight-bold">Cliff Emmons</h4>
                     <h6 className="font-weight-bold mb-4">Head of Biz Dev</h6>
                     <hr/>
                     <p className="dark-grey-text text-left mt-4"><i className="fas fa-quote-left pr-2"></i>A
                        passionate visionary executive leader with extensive ....
                     </p>
                     <a href="solution_railroad.html" className="black-text d-flex justify-content-end">
                        <h5>Read more <i className="fas fa-angle-double-right"></i></h5>
                     </a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
               <div className="card testimonial-card">
                  <div className="card-up indigo"></div>
                  <div className="avatar mx-auto white">
                     <img alt="img" src="img/team/6.jpg" className="rounded-circle img-fluid"/>
                  </div>
                  <div className="card-body">
                     <h4 className="font-weight-bold">SKaren Driscoll</h4>
                     <h6 className="font-weight-bold mb-4">COO</h6>
                     <hr/>
                     <p className="dark-grey-text text-left mt-4"><i
                        className="fas fa-quote-left pr-2"></i>Collaborative strategic global business
                        leader with extensive....
                     </p>
                     <a href="solution_railroad.html" className="black-text d-flex justify-content-end">
                        <h5>Read more <i className="fas fa-angle-double-right"></i></h5>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </section>
   */}
                {/*Section: Team*/}
                {/* Streak */}
                <div className="z-depth-1 px-0" id="contactus">
                    {/*Section: Content*/}
                    <section className="pt-5"
                        style={{ backgroundImage: "url('img/Images/contact.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="rgba-black-strong rounded p-5 ">
                            {/* Section heading */}
                            <h2 className="my-5 wow fadeIn font-weight-bold text-center text-white animated" data-wow-delay="0.2s"
                                style={{ visibility: "visible", animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                CONTACT<span className="font-weight-light border-line-white text-white"> US</span>
                            </h2>
                            <form className="pb-5 container">
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <div className="">
                                            <div className="card-body px-4">
                                                <div className="row">
                                                    {/* Grid column */}
                                                    <div className="col-md-4">
                                                        <div className="md-form mb-0">
                                                            <input type="text" id="form-contact-name" className="form-control" />
                                                            <label for="form-contact-name" className="">First Name</label>
                                                        </div>
                                                    </div>
                                                    {/* Grid column */}
                                                    {/* Grid column */}
                                                    <div className="col-md-4">
                                                        <div className="md-form mb-0">
                                                            <input type="text" id="form-last-name" className="form-control" />
                                                            <label for="form-last-name" className="">Last Name</label>
                                                        </div>
                                                    </div>
                                                    {/* Grid column */}
                                                    {/* Grid column */}
                                                    <div className="col-md-4">
                                                        <div className="md-form mb-0">
                                                            <input type="text" id="form-contact-email" className="form-control" />
                                                            <label for="form-contact-email" className="">Your email</label>
                                                        </div>
                                                    </div>
                                                    {/* Grid column */}
                                                    {/* Grid column */}
                                                    <div className="col-md-4">
                                                        <div className="md-form mb-0">
                                                            <input type="text" id="form-phone-number" className="form-control" />
                                                            <label for="form-phone-number" className="">Phone Number</label>
                                                        </div>
                                                    </div>
                                                    {/* Grid column */}
                                                    {/* Grid column */}
                                                    <div className="col-md-4">
                                                        <div className="md-form mb-0">
                                                            <input type="text" id="Job-titel" className="form-control" />
                                                            <label for="Job-titel" className="">Job Title</label>
                                                        </div>
                                                    </div>
                                                    {/* Grid column */}
                                                    {/* Grid column */}
                                                    <div className="col-md-4">
                                                        <div className="md-form mb-0">
                                                            <input type="text" id="form-company" className="form-control" />
                                                            <label for="form-company" className="">Company / Organisation</label>
                                                        </div>
                                                    </div>
                                                    {/* Grid column */}
                                                    {/* Grid column */}
                                                    <div className="col-md-12">
                                                        <div className="md-form mb-0 text-right">
                                                            <textarea id="form-contact-message" className="form-control md-textarea"
                                                                rows="3"></textarea>
                                                            <label for="form-contact-message" className="">Your message</label>
                                                            <a href="#"
                                                                className="btn btn-outline-white btn-lg wow fadeIn waves-effect waves-light animated"
                                                                data-wow-delay="0.3s"
                                                                style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }}>Submit</a>
                                                        </div>
                                                    </div>
                                                    {/* Grid column */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 
               <div className="col-md-3 mt-md-4 mb-4 white-text">
                  <h5 className="font-weight-bold text-white">Address</h5>
                  <p className="mb-0">1632 Main Street</p>
                  <p className="mb-0">New York, 94126</p>
                  <p className="mb-4 pb-2">United States</p>
                  <h5 className="font-weight-bold text-white">Phone</h5>
                  <p className="mb-4 pb-2">+ 01 234 567 89</p>
                  <h5 className="font-weight-bold text-white">Email</h5>
                  <p>info@gmail.com</p>
               </div>
               */}
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
                {/*Section: Content*/}
            </main>
        )
    }
}