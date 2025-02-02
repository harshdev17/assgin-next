import React from 'react'
import HeroForm from '../heroForm/HeroForm'

const Hero = () => {
  return (
    <section className="banner">
    <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <div className="banner-content">
                    <h1>UK Assignment Help: Achieve Guaranteed A+ Grades </h1>
                    <p>Online Assignment Help by Professional UK Writers to Score Good Grades in Academics. Our
                        assignment helpers are ready to Assist you out 24/7.</p>

                    <ul>
                        <li className="project"><i className="fa fa-user-check"></i> <span> 72780+ </span> Project Delivered
                        </li>
                        <li className="expert"><i className="fas fa-user-graduate"></i> <span>500+ Experts </span>24x7
                            Online Help </li>
                        <li className="AI"><i className="fa fa-print"></i><span>No AI Generated </span>Content</li>
                    </ul>

                    <div className="button-group">
                       <div className="re-logo">
                            <a href="#" title="Live Chat on WhatsApp" className="order-button bg-green"><i className="fa-brands fa-whatsapp"></i>WhatsApp Chat</a>
                        </div>
                        <div className="review-strip">
                        <div className="re-logo">
                            <a href="#">
                                <picture><img src="img/google-review-logo.png" alt="logo"
                                    className="img-fluid" /></picture>
                                    </a><span>4.5</span>
                        </div>
                        
                        <div className="re-logo">
                            <a href="#"><picture><img src="img/trust-logo.png" alt="logo"
                                    className="img-fluid" /></picture></a><span>4.6</span>
                        </div>
                        </div>

                    </div>




                </div>
            </div>
            <div className="col-lg-5">
                <div className="banner_form">
                    <h4>Get Free Assignment Quote</h4>
                   
                        <HeroForm />
                    
                </div>
            </div>
        </div>
    </div>

</section>
  )
}

export default Hero