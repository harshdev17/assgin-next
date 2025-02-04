"use client"
import React, { useState } from 'react'
import "@/public/css/drawer.css"
import Link from 'next/link';

const Header = () => {
    const [openDrwer, setOpenDrwer] = useState(false);
    const [drawerLevel2, setDrawerLevel2] = useState(false);
    const [drawerLevel3, setDrawerLevel3] = useState(false);
    const [drawerLevel3Val, setDrawerLevel3Val] = useState([]);

    const services = [
        { name: "Assignment Services", val: "assignmentServices" },
        { name: "Dissertation Help", val: "dissertationServices" },
        { name: "Coursework Help", val: "dissertationServices" },
        { name: "Homework", val: "dissertationServices" },
        { name: "Assignment in Cities", val: "assignmentInCities" },
        { name: "Essay Services", val: "assignmentInCities" },
        { name: "Dissertation Topics", val: "assignmentInCities" },
        { name: "Other", val: "assignmentInCities" },
        { name: "Assignment in State", val: "assignmentInCities" }
    ];


    const assignmentServices = [
        { name: "Cheap Assignment Help", link: "#" },
        { name: "High School Assignment", link: "/assignment-services/high-school-assignment" },
        { name: "College Assignment Help", link: "#"  },
        { name: "Assignment Proofreading Services", link: "#"  },
        { name: "Custom Assignment", link: "#"  },
        { name: "English Assignment Help UK", link: "#"  },
        { name: "Pay Someone To Do My Assignment", link: "#"  },
        { name: "Last Minute Assignment", link: "#"  },
        { name: "Custom Writing Service", link: "#"  },
        { name: "Education Assignment Help UK", link: "#"  },
        { name: "Edexcel Assignment", link: "#"  },
        { name: "Assessment Help", link: "#"  },
        { name: "CTH Assignment", link: "#"  },
        { name: "Academic Writing Services", link: "#"  },
        { name: "Buy Assignment Online", link: "#"  }
    ];

    const dissertationServices = [
        { name: "Cheap Dissertation Help" },
        { name: "Nursing Dissertation Writing Services" },
        { name: "Fashion Dissertation Writing Services" },
        { name: "Human Resource Dissertation Writing Services" },
        { name: "MBA Dissertation Writing Services" },
        { name: "Construction Dissertation Writing" },
        { name: "Nursing Dissertation Writing Services" },
        { name: "Fashion Dissertation Writing Services" },
        { name: "Human Resource Dissertation Writing Services" },
        { name: "MBA Dissertation Writing Services" },
        { name: "Construction Dissertation Writing" }
    ];

    const assignmentInCities = [
        { name: "Assignment Help London" },
        { name: "Assignment Services Cambridge" },
        { name: "Assignment Help Southampton" },
        { name: "Assignment Services Manchester" },
        { name: "Assignment Help Oxford" },
        { name: "Assignment Services Edinburgh" },
        { name: "Assignment Help London" },
        { name: "Assignment Services Cambridge" },
        { name: "Assignment Help Southampton" },
        { name: "Assignment Services Manchester" },
        { name: "Assignment Help Oxford" },
        { name: "Assignment Services Edinburgh" }
    ];
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
                                                        {assignmentServices.map((item, index) => (
                                                            <li key={index}><Link href={item.link}>{item.name}</Link></li>
                                                        ))}


                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="">
                                                <a href="javascript:void(0);" className="toggle_sm">Dissertation Help</a>
                                                <div className="service-dropedown inner_menu mCustomScrollbar">
                                                    <span className="back_menu"><i className="Back"></i> </span>
                                                    <ul>
                                                        {dissertationServices.map((item, index) => (
                                                            <li key={index}><a href="#">{item.name}</a>
                                                            </li>
                                                        ))}



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
                                                        {assignmentInCities.map((item, index) => (
                                                            <li key={index}><a href="#">{item.name}</a>
                                                            </li>
                                                        ))}



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

                        <div onClick={() => setOpenDrwer(!openDrwer)} id="trigger" className="menu-trigger"><i className="fas fa-bars"></i></div>
                    </div>


                </div>
            </div>

            {/* Push Wrapper  */}

            {openDrwer &&
                <div className='header-sidebar-1'>
                    {drawerLevel2 !== true && drawerLevel3 !== true &&
                        <div>
                            <div>Home</div>
                            <div onClick={() => setDrawerLevel2(true)}>Services</div>
                            <div>Answers</div>
                            <div>Blog</div>
                            <div>Experts</div>
                            <div>Reviews</div>
                        </div>
                    }

                    {drawerLevel2 && drawerLevel3 !== true &&
                        <div>
                            <div onClick={() => setDrawerLevel2(false)}>Back</div>
                            {services.map((item, index) => (
                                <div key={index} onClick={() => { setDrawerLevel3(true), setDrawerLevel3Val(item.val) }}>{item.name}</div>
                            ))}

                        </div>
                    }


                    {drawerLevel3 &&
                        <div>
                            <div onClick={() => setDrawerLevel3(false)}>Back</div>
                            {drawerLevel3Val === "assignmentServices" &&
                                assignmentServices.map((item, index) => (
                                    <div key={index}><Link onClick={() => {setDrawerLevel3(false), setDrawerLevel2(false), setOpenDrwer(false)}} href={item.link}>{item.name}</Link></div>
                                ))}

                            {drawerLevel3Val === "dissertationServices" &&
                                dissertationServices.map((item, index) => (
                                    <div key={index}>{item.name}</div>
                                ))}

                            {drawerLevel3Val === "assignmentInCities" &&
                                assignmentInCities.map((item, index) => (
                                    <div key={index}>{item.name}</div>
                                ))}

                        </div>
                    }



                </div>
            }


        </header>
    )
}

export default Header