import React from 'react'

const UniversitySlider = () => {
  return (
    <section className="university-logo">
    <div className="container">
        <section className="container banner-bottom-logo">
            <div className="logoMarqueeSection">
                <div className="container" id="logoMarqueeSection">
                    <div className="default-content-container flex items-center">
                        <div
                            className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
                            <div className="marquee banner-bottom-logo-inner" style={{animationDuration: "57s"}}>
                                <span><i>&nbsp;</i></span> <span><i className="lo-2">&nbsp;</i></span> <span><i
                                        className="lo-3">&nbsp;</i></span> <span><i className="lo-4">&nbsp;</i></span>
                                <span><i className="lo-5">&nbsp;</i></span> <span> <i className="lo-6">&nbsp;</i></span>
                            </div>
                            <div className="marquee banner-bottom-logo-inner"  style={{animationDuration: "57s"}}>
                                <span><i>&nbsp;</i></span> <span><i className="lo-2">&nbsp;</i></span> <span><i
                                        className="lo-3">&nbsp;</i></span> <span><i className="lo-4">&nbsp;</i></span>
                                <span><i className="lo-5">&nbsp;</i></span> <span> <i className="lo-6">&nbsp;</i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
</section>
  )
}

export default UniversitySlider