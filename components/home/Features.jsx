import React from 'react'

const Features = () => {
  return (
    <section className="services">
        <div className="container">
            <div className="title">
                <h2>Academic Writing Services Offering in the UK</h2>
                <p>At New Assignment Help, We offer all types of academic writing services like assignments, essays,
                    Dissertations, research papers, coursework writing etc. We guarantee that you will get on-time
                    delivery and excellent quality work.</p>
            </div>
            <div className="row ">
                <div className="col-lg-3">
                    <a href="#">
                        <div className="service-block">

                            <span><i className="fas fa-book-reader"></i></span>
                            <h4>Assignment Help</h4>
                            <p>If you're finding it tough to write college assignments, then taking service from a
                                UK-based assignment writer is the best way to deal with the situation.</p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3">
                    <a href="#">
                        <div className="service-block">
                            <span> <i className="fas fa-edit "></i></span>
                            <h4>Essay Writing Help</h4>
                            <p>Worried about essay writing for your college admission &amp; scholarships.there are many
                                essay assignment given to you in your high school,college.

                            </p>
                        </div>
                    </a>
                </div>

                <div className="col-lg-3">
                    <a href="#">
                        <div className="service-block">
                            <span> <i className="fas fa-edit "></i></span>
                            <h4>Dissertation Help</h4>
                            <p>Working on a dissertation demands a lot of time, effort, research skills, and writing
                                abilities. If you're deprived of any one of them </p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3">
                    <a href="#">
                        <div className="service-block">
                            <span><i className="fas fa-file-alt"></i></span>
                            <h4>Coursework Help</h4>
                            <p>Writing coursework on an uninteresting topic seems a tough nut to crack. Why wallow in
                                stress when you have <b>expert UK writers</b> by your side? </p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="text-center"><a className="order-button" href="#">Order Now</a></div>
        </div>
    </section>
  )
}

export default Features