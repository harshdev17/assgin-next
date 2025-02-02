import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="main-footer">
        <div className="container">
            <div className="footer-top">
                <a href="#" className="footer-logo">
                    <picture><img src="img/footer-logo.png" alt="logo" className="img-fluid" /></picture>
                    </a>
                <p>UK Assignment Help Online provides custom written papers to assist students in research, writing and
                    proofreading process. These assignments are for assistance purposes only and students are suggested
                    to use them as guide papers only in order to avoid any sort of law violation of the university or
                    education sector.</p>
            </div>

            <div className="footer">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-box">
                            <div className="heading">TOP SEARCHES</div>
                            <ul className="footer-links">
                                <li>
                                    <a href="#">Cheap Assignment Help</a>
                                </li>
                                <li>
                                    <a href="#">Marketing Assignment</a>
                                </li>
                                <li>
                                    <a href="#">Business Assignment</a>
                                </li>
                                <li>
                                    <a href="#">College Assignment</a>
                                </li>
                                <li>
                                    <a href="#">Custom Assignment</a>
                                </li>
                                <li>
                                    <a href="#">MBA Assignment Help</a>
                                </li>
                                <li>
                                    <a href="#">Law assignment help</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-box">
                            <div className="heading">OUR COMPANY</div>
                            <ul className="footer-links">
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cancellation Policy</a></li>
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">SiteMap</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-box contact-footer-box">
                            <div className="heading">CONTACT US</div>
                            <div className="other-linkes">
                                <a className="whatsappLink" href="javascript:goTo('whatsapp');"><i
                                        className="fa-brands fa-whatsapp"></i>+44 1234567891</a>
                                <a href="mailto:info@ukassignmenthelponline.com" className="email"><i
                                        className="fa fa-envelope"></i> info@ukassignmenthelponline.com</a>
                            </div>
                            <div className="social-icons">
                                <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-box disclaimer-box">
                            <div className="heading">Disclaimer</div>
                            <p>UK Assignment Help Online provides custom written papers to assist students in research,
                                writing
                                and proofreading process. These assignments are for assistance purposes only and
                                students are
                                suggested to use them as guide papers only in order to avoid any sort of law violation
                                of the
                                university or education sector.</p>
                            <div className="payment">
                                <div className="title">SECURE PAYMENT</div>
                                <picture><img src="img/payment.png" /></picture>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

            <div className="country-deal">
                <div className="container">
                    <div className="country-list">
                        <div className="footer-title">
                            <h4>We Offer Assignment Writing Services In :</h4>
                        </div>
                        <ul>
                            <li><a href="#">Southampton</a></li>
                            <li><a href="#">London</a></li>
                            <li><a href="#">Oxford</a></li>
                            <li><a href="#">Bristol</a></li>
                            <li><a href="#">Bradford</a></li>
                            <li><a href="#">Birmingham</a></li>
                            <li><a href="#">Bournemouth</a></li>
                            <li><a href="#">Canterbury</a></li>
                            <li><a href="#">Leeds</a></li>
                            <li><a href="#">Cardiff</a></li>
                            <li><a href="#">Nottingham</a></li>
                            <li><a href="#">Liverpool</a></li>
                            <li><a href="#">Cambridge</a></li>
                            <li><a href="#">Manchester</a></li>
                            <li><a href="#">Edinburgh</a></li>
                            <li><a href="#">Chelmsford</a></li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="copyright-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="copyRightText">
                            <p>© 2025 UK Assignment help online. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="secure-logo">
                           <picture> <img src="img/secure-logo.png" /></picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>


    <div className="mobile-menu-fixed-bar d-lg-none">
        <ul>
            <li><a href="#"><span className="btn-outline-primary"><i className="fas fa-envelope"></i></span>Email</a></li>
            <li><a href="#tution-rate"><span className="btn-outline-orange"><i className="fas fa-cart-arrow-down"></i></span>Order Now</a></li>
            <li><a href="tel:+1234567890"><span className="btn-outline-info"><i className="fab fa-rocketchat"></i></span>Live Chat</a></li>
            <li><a href="#" target="_blank" >
                    <span className="btn-outline-success"><i className="fab fa-whatsapp"></i></span>WhatsApp
                </a></li>
        </ul>
    </div>
    </>
  )
}

export default Footer