
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="header-top">
            <div className="container">

                <div className="offer_block">
                    <a href="#" className="offer_btn">offer</a>
                    <p className="offer_text"> Enjoy Upto <b> 50% OFF</b> on Assignment Solutions!
                    </p>
                </div>

                <div className="address_info">

                    <a aria-label="Email address:info@ukAssignmenthelponline.com"
                        href="mailto:info@ukAssignmenthelponline.com"><i
                            className="fa fa-envelope"></i>info@ukAssignmenthelponline.com</a>
                    {/* <! <a aria-label="My Account" href="#" className="my-account"><i className="fa fa-user-circle"></i> My
                        Account</a>  */}
                </div>

            </div>
        </div>

        <div className="container">
            <div className="menu-drop">
                <a href="#" className="logo"> 
                    <picture><img src="img/logo.png" alt="logo" className="img-fluid" /></picture>
                    </a>
                <div className="header-right">
                    <nav className="desktop-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#" className="dropdown-toggle">Services</a>
                                <div className="services_menu sm sm-slide">
                                    <span className="back_menu"><i className="Back"></i> </span>
                                    <ul className="drop_service_menu ">
                                        <li className="">
                                            <a href="javascript:void(0);" className="toggle_sm">Assignment Services</a>
                                            <div className="service-dropedown inner_menu mCustomScrollbar">
                                                <span className="back_menu"><i className="Back"></i> </span>
                                                <ul>
                                                    <li><a href="#">Cheap Assignment Help</a>
                                                    </li>
                                                    <li><a href="#">High School Assignment</a>
                                                    </li>
                                                    <li><a href="#">College Assignment Help</a>
                                                    </li>
                                                    <li><a href="#">University Assignment Help</a>
                                                    </li>
                                                    <li><a href="#">Assignment Proofreading Services</a>
                                                    </li>
                                                    <li><a href="#">Custom Assignment</a>
                                                    </li>
                                                    <li><a href="#">English Assignment Help UK</a>
                                                    </li>
                                                    <li><a href="#">Pay Someone To Do My Assignment</a>
                                                    </li>
                                                    <li><a href="#">Last Minute Assignment</a>
                                                    </li>
                                                    <li><a href="#">Custom Writing Service</a>
                                                    </li>
                                                    <li><a href="#">Education Assignment Help UK</a>
                                                    </li>
                                                    <li><a href="#">Edexcel Assignment</a>
                                                    </li>
                                                    <li><a href="#">Assessment Help</a>
                                                    </li>
                                                    <li><a href="#">CTH Assignment</a>
                                                    </li>
                                                    <li><a href="#">Academic Writing Services</a>
                                                    </li>
                                                    <li><a href="#">Buy Assignment Online</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="">
                                            <a href="javascript:void(0);" className="toggle_sm">Dissertation Help</a>
                                            <div className="service-dropedown inner_menu mCustomScrollbar">
                                                <span className="back_menu"><i className="Back"></i> </span>
                                                <ul>
                                                    <li><a href="#">Cheap Dissertation Help</a>
                                                    </li>
                                                    <li><a href="#">Nursing Dissertation Writing Services</a>
                                                    </li>
                                                    <li><a href="#">Fashion Dissertation Writing Services</a>
                                                    </li>
                                                    <li><a href="#">Human Resource Dissertation Writing Services</a>
                                                    </li>
                                                    <li><a href="#">MBA Dissertation Writing Services</a>
                                                    </li>
                                                    <li><a href="#">Construction Dissertation Writing</a>
                                                    </li>
                                                    <li><a href="#">Nursing Dissertation Writing Services</a>
                                                    </li>
                                                    <li><a href="#">Fashion Dissertation Writing Services</a>
                                                    </li>
                                                    <li><a href="#">Human Resource Dissertation Writing Services</a>
                                                    </li>
                                                    <li><a href="#">MBA Dissertation Writing Services</a>
                                                    </li>
                                                    <li><a href="#">Construction Dissertation Writing</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                        <li className="">
                                            <a href="javascript:void(0);" className="toggle_sm">Coursework</a>
                                            <div className="service-dropedown inner_menu mCustomScrollbar">
                                                <span className="back_menu"><i className="Back"></i> </span>
                                                <ul>
                                                    <li><a href="#">Coursework Help</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="">
                                            <a href="javascript:void(0);" className="toggle_sm">Homework</a>
                                            <div className="service-dropedown inner_menu mCustomScrollbar">
                                                <span className="back_menu"><i className="Back"></i> </span>
                                                <ul>
                                                    <li><a href="#">Homework</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="">
                                            <a href="javascript:void(0);" className="toggle_sm">Assignment in Cities</a>
                                            <div className="service-dropedown inner_menu mCustomScrollbar">
                                                <span className="back_menu"><i className="Back"></i> </span>
                                                <ul>
                                                    <li><a href="#">Assignment Help London</a>
                                                    </li>
                                                    <li><a href="#">Assignment Services Cambridge</a>
                                                    </li>
                                                    <li><a href="#">Assignment Help Southampton</a>
                                                    </li>
                                                    <li><a href="#">Assignment Services Manchester</a>
                                                    </li>
                                                    <li><a href="#">Assignment Help Oxford</a>
                                                    </li>
                                                    <li><a href="#">Assignment Services Edinburgh</a>
                                                    </li>
                                                    <li><a href="#">Assignment Help London</a>
                                                    </li>
                                                    <li><a href="#">Assignment Services Cambridge</a>
                                                    </li>
                                                    <li><a href="#">Assignment Help Southampton</a>
                                                    </li>
                                                    <li><a href="#">Assignment Services Manchester</a>
                                                    </li>
                                                    <li><a href="#">Assignment Help Oxford</a>
                                                    </li>
                                                    <li><a href="#">Assignment Services Edinburgh</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                        <li className="">
                                            <a href="javascript:void(0);" className="toggle_sm">Essay Services</a>
                                            <div className="service-dropedown inner_menu mCustomScrollbar">
                                                <span className="back_menu"><i className="Back"></i> </span>
                                                <ul>
                                                    <li><a href="#">Best Essay Writing Services</a>
                                                    </li>
                                                    <li><a href="#">HRM Essay</a>
                                                    </li>
                                                    <li><a href="#">Law Essay Writing</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="">
                                            <a href="javascript:void(0);" className="toggle_sm">Dissertation Topics</a>
                                            <div className="service-dropedown inner_menu mCustomScrollbar">
                                                <span className="back_menu"><i className="Back"></i> </span>
                                                <ul>
                                                    <li><a href="#">Business Dissertation Topics</a>
                                                    </li>
                                                    <li><a href="#">Business Management Dissertation Topic</a>
                                                    </li>
                                                    <li><a href="#">Finance Dissertation Topic</a>
                                                    </li>
                                                    <li><a href="#">Media Dissertation Topic</a>
                                                    </li>
                                                    <li><a href="#">Business Research Topics</a>
                                                    </li>

                                        {/* </li> */}
                                    </ul>
                                </div>
                            </li>
                            <li className="">
                                <a href="javascript:void(0);" className="toggle_sm">Other</a>
                                <div className="service-dropedown inner_menu mCustomScrollbar">
                                    <span className="back_menu"><i className="Back"></i> </span>
                                    <ul>
                                        <li><a href="#">Statement of Purpose Writing Service</a>
                                        </li>
                                        <li><a href="#">Research Paper Writing Service</a>
                                        </li>
                                        <li><a href="#">Research Proposal Writing Help</a>
                                        </li>
                                        <li><a href="#">Resume Services</a>
                                        </li>
                                        <li><a href="#">Case Study</a>
                                        </li>
                                        <li><a href="#">Term Paper Writing Service</a>
                                        </li>
                                        <li><a href="#">Online Exam Help UK</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="">
                                <a href="javascript:void(0);" className="toggle_sm">Assignment in State</a>
                                <div className="service-dropedown inner_menu mCustomScrollbar">
                                    <span className="back_menu"><i className="Back"></i> </span>
                                    <ul>
                                        <li><a href="#">Assignment Writing England</a>
                                        </li>
                                        <li><a href="#">Assignment Writing Scotland</a>
                                        </li>
                                        <li><a href="#">Assignment Writing Wales</a>
                                        </li>
                                        <li><a href="#">Assignment Writing Northern Ireland</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                </div>
                </li>


                <li><a href="#">Answers </a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Experts </a></li>
                <li><a href="#">Reviews</a></li>
                </ul>
                </nav>

                



                <a href="#" title="Live Chat on WhatsApp" className="whatchat-btn"><i className="fa-brands fa-whatsapp"></i>
                    WhatsApp Order</a>
                <a href="#" className="search-btn"><i className="fa fa-search"></i></a>

                <a href="#" id="trigger" className="menu-trigger"><i className="fas fa-bars"></i></a>
            </div>


        </div>
        </div>

         {/* Push Wrapper  */}
         
        <div className="mp-pusher" id="mp-pusher">
           

            <nav id="mp-menu" className="mp-menu">
                <div className="mp-level">
                    <h2 className="fa fa-search">All Categories</h2>
                    <ul>
                        <li className="icon icon-arrow-left">
                            <a className="icon icon-display" href="#">Devices</a>
                            <div className="mp-level">
                                <h2 className="icon icon-display">Devices</h2>
                                <a className="mp-back" href="#">back</a>
                                <ul>
                                    <li className="icon icon-arrow-left">
                                        <a className="icon icon-phone" href="#">Mobile Phones</a>
                                        <div className="mp-level">
                                            <h2>Mobile Phones</h2>
                                            <a className="mp-back" href="#">back</a>
                                            <ul>
                                                <li><a href="#">Super Smart Phone</a></li>
                                                <li><a href="#">Thin Magic Mobile</a></li>
                                                <li><a href="#">Performance Crusher</a></li>
                                                <li><a href="#">Futuristic Experience</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="icon icon-arrow-left">
                                        <a className="icon icon-tv" href="#">Televisions</a>
                                        <div className="mp-level">
                                            <h2>Televisions</h2>
                                            <a className="mp-back" href="#">back</a>
                                            <ul>
                                                <li><a href="#">Flat Superscreen</a></li>
                                                <li><a href="#">Gigantic LED</a></li>
                                                <li><a href="#">Power Eater</a></li>
                                                <li><a href="#">3D Experience</a></li>
                                                <li><a href="#">classNameic Comfort</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="icon icon-arrow-left">
                                        <a className="icon icon-camera" href="#">Cameras</a>
                                        <div className="mp-level">
                                            <h2>Cameras</h2>
                                            <a className="mp-back" href="#">back</a>
                                            <ul>
                                                <li><a href="#">Smart Shot</a></li>
                                                <li><a href="#">Power Shooter</a></li>
                                                <li><a href="#">Easy Photo Maker</a></li>
                                                <li><a href="#">Super Pixel</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="icon icon-arrow-left">
                            <a className="icon icon-news" href="#">Magazines</a>
                            <div className="mp-level">
                                <h2 className="icon icon-news">Magazines</h2>
                                <a className="mp-back" href="#">back</a>
                                <ul>
                                    <li><a href="#">National Geographic</a></li>
                                    <li><a href="#">Scientific American</a></li>
                                    <li><a href="#">The Spectator</a></li>
                                    <li><a href="#">The Rambler</a></li>
                                    <li><a href="#">Physics World</a></li>
                                    <li><a href="#">The New Scientist</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="icon icon-arrow-left">
                            <a className="icon icon-shop" href="#">Store</a>
                            <div className="mp-level">
                                <h2 className="icon icon-shop">Store</h2>
                                <a className="mp-back" href="#">back</a>
                                <ul>
                                    <li className="icon icon-arrow-left">
                                        <a className="icon icon-t-shirt" href="#">Clothes</a>
                                        <div className="mp-level">
                                            <h2 className="icon icon-t-shirt">Clothes</h2>
                                            <a className="mp-back" href="#">back</a>
                                            <ul>
                                                <li className="icon icon-arrow-left">
                                                    <a className="icon icon-female" href="#">Women's Clothing</a>
                                                    <div className="mp-level">
                                                        <h2>Women's Clothing</h2>
                                                        <a className="mp-back" href="#">back</a>
                                                        <ul>
                                                            <li><a href="#">Tops</a></li>
                                                            <li><a href="#">Dresses</a></li>
                                                            <li><a href="#">Trousers</a></li>
                                                            <li><a href="#">Shoes</a></li>
                                                            <li><a href="#">Sale</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="icon icon-arrow-left">
                                                    <a className="icon icon-male" href="#">Men's Clothing</a>
                                                    <div className="mp-level">
                                                        <h2>Men's Clothing</h2>
                                                        <a className="mp-back" href="#">back</a>
                                                        <ul>
                                                            <li><a href="#">Shirts</a></li>
                                                            <li><a href="#">Trousers</a></li>
                                                            <li><a href="#">Shoes</a></li>
                                                            <li><a href="#">Sale</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="icon icon-diamond" href="#">Jewelry</a>
                                    </li>
                                    <li>
                                        <a className="icon icon-music" href="#">Music</a>
                                    </li>
                                    <li>
                                        <a className="icon icon-food" href="#">Grocery</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a className="icon icon-photo" href="#">Collections</a></li>
                        <li><a className="icon icon-wallet" href="#">Credits</a></li>
                    </ul>

                </div>
            </nav>
           
           
       
        </div>
       
    </header>
  )
}

export default Header