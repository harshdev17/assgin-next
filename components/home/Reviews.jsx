"use client"
import React from 'react'
import {Swiper, SwiperSlide } from "swiper/react";
//simport { SwiperSlide } from 'swiper/react';
//import Swiper from 'swiper';
//import  from 'swiper';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Reviews = () => {
  return (
    <section className="testimonials">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section_heading text-center ">
                        <h2 className="section_main_title text-white">4.9/5 Rating Based on USA Students Reviews</h2>
                        <p className="section_top_content text-white">During the tenure of our service offering, we have
                            delivered lakhs of assignments, essays and dissertations and have gained trust of our
                            customers, which can be seen by our high review ratings of 4.9 / 5 Stars.</p>
                    </div>
                </div>
            </div>
            {/* <div className="row"> */}
            <Swiper
       spaceBetween={30}
     // centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        740: {
          slidesPerView: 2,
          
        },
        
      }}
      loop={true}
    //   pagination={{
    //     clickable: true,
    //   }}
      //navigation={true}
       modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      watchSlidesProgress={true} slidesPerView={1} 
    >

            
            <SwiperSlide>
                {/* <div className=""> */}
                    <div className="testimonial-slide shadow orange-border">
                        <div className="row">
                            <div className="col-md-6 col-6 rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="col-md-6 col-6 text-right">
                                <span> </span>
                            </div>
                        </div>
                        <h5 className="review-title ">
                            Highly Professional Experts</h5>
                        <p><span style={{fontWeight: "400"}}>The team of experts at Studentsassignmenthelp.com provided me
                                with engineering assignment help with highly professional experts. Their solutions were
                                detailed and well-explained. I would definitely use their services again.</span></p>
                        <h5>Marcus</h5>
                        <div className="testimonial-slide-author ">
                            <div className="testimonial-author-detail">
                                <div className="row">
                                    <div className="col-9  col-9 d-flex align-items-center">
                                        <span>Los Angeles, USA, University of California, Los Angeles</span>
                                    </div>
                                    <div className="col-3  col-3 text-right">
                                        <div className="quote-ico"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                {/* <div className=""> */}
                    <div className="testimonial-slide shadow orange-border">
                        <div className="row">
                            <div className="col-md-6 col-6 rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="col-md-6 col-6 text-right">
                                <span> </span>
                            </div>
                        </div>
                        <h5 className="review-title ">
                            Highly Professional Experts</h5>
                        <p><span style={{fontWeight: "400"}}>The team of experts at Studentsassignmenthelp.com provided me
                                with engineering assignment help with highly professional experts. Their solutions were
                                detailed and well-explained. I would definitely use their services again.</span></p>
                        <h5>Marcus</h5>
                        <div className="testimonial-slide-author ">
                            <div className="testimonial-author-detail">
                                <div className="row">
                                    <div className="col-9  col-9 d-flex align-items-center">
                                        <span>Los Angeles, USA, University of California, Los Angeles</span>
                                    </div>
                                    <div className="col-3  col-3 text-right">
                                        <div className="quote-ico"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                {/* <div className=""> */}
                    <div className="testimonial-slide shadow orange-border">
                        <div className="row">
                            <div className="col-md-6 col-6 rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="col-md-6 col-6 text-right">
                                <span> </span>
                            </div>
                        </div>
                        <h5 className="review-title ">
                            Highly Professional Experts</h5>
                        <p><span style={{fontWeight: "400"}}>The team of experts at Studentsassignmenthelp.com provided me
                                with engineering assignment help with highly professional experts. Their solutions were
                                detailed and well-explained. I would definitely use their services again.</span></p>
                        <h5>Marcus</h5>
                        <div className="testimonial-slide-author ">
                            <div className="testimonial-author-detail">
                                <div className="row">
                                    <div className="col-9  col-9 d-flex align-items-center">
                                        <span>Los Angeles, USA, University of California, Los Angeles</span>
                                    </div>
                                    <div className="col-3  col-3 text-right">
                                        <div className="quote-ico"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                </SwiperSlide>
            
            </Swiper>
            {/* </div> */}
        </div>
    </section>
  )
}

export default Reviews