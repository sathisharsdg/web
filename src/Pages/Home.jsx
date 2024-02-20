import React from 'react'
import { Helmet } from 'react-helmet' 
import "../assets/css/Home.css"
import homeMainbanner from "../assets/images/home-banner.png"
import selenium from "../assets/images/homepage/selenium-aimore.png" 
import powerBi from "../assets/images/homepage/power-bi-training-aimore.png"
import fullstack from "../assets/images/homepage/fullstack-training-aimore.png"
import awsimg from "../assets/images/homepage/aws-training-aimore.png"
import pythonimg from "../assets/images/homepage/python-training-aimore.png"
import bestsoftware from "../assets/images/homepage/best-software-training-aimore.png"
import { Link } from 'react-router-dom'
import whychoose from "../assets/images/homepage/why-choose-aimore.png"
function Home() {
    return (
        <div>
       <Helmet>
         <title>Home Page</title>
       </Helmet>
            <div class="slider-area banner-style-5 bg-image index-banner">
                <div class="wrapper d-flex align-items-center">
                <div class="container eduvibe-animated-shape content">
                   <div className="row">
                      <div className="col-md-7">
                         <h1 className='title'>Software Training Institute In Chennai</h1>
                         <p>Best Software Training Institute In Chennai. We Offer The Best Training For Courses Like AWS, Data Science, Selenium, Python, Web Development, Azure DevOps, Cloud Computing, Artificial Intelligence, Machine Learning, Power BI, And More</p>
                         <div class="read-more-btn mt--30 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800"><Link class="edu-btn" to="/contact-us">Enroll Now <i class="icon-arrow-right-line-right"></i></Link></div>
                      </div>
                      <div className="col-md-5">
                         <img src={homeMainbanner} alt="home" className='img-fluid'/>
                      </div>
                   </div>
                  
                </div>
                </div>
          
            </div>


            <div class="container eduvibe-animated-shape">
                <div class="row py-5">
                    <div class="col-lg-12">
                        <div class="section-title text-center sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            
                            <h2 class="title">Our Trending Courses</h2>
                        </div>
                    </div>
                </div>
                <div class="row eduvibe-about-one-service g-5 py-5">          
                    <div class="col-md-4 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <div class="service-card service-card-3 text-left shape-bg-1 bg-grey">
                            <div class="inner">
                                <div class="icon">
                                     <img src={selenium} alt="selenium" className='img-fluid' />
                                </div>
                                <div class="content">
                                    <h6 class="title">Selenium Training</h6>
                                    <p class="description">Master Selenium Training in Chennai at Aimore Technology! Dive into comprehensive training, ace automation testing, and advance your career today</p>
                                    <div class="read-more-btn">
                                        <Link to="/selenium-training-in-chennai/" className='btn-transparent sm-size heading-color'>Learn More <i class="icon-arrow-right-line-right"></i></Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
 
                    <div class="col-md-4 sal-animate sal-animate" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
                        <div class="service-card service-card-3 text-left shape-bg-2 bg-grey">
                        <div class="inner">
                                <div class="icon">
                                     <img src={awsimg} alt="aws-training" className='img-fluid' />
                                </div>
                                <div class="content">
                                    <h6 class="title">AWS Training</h6>
                                    <p class="description">Expertise Your AWS Skills With Professional AWS Trainers At Aimore Technology. Learn AWS Easily Online At Your Comfortable Timings. Best AWS Training In Chennai.</p>
                                    <div class="read-more-btn">
                                        <Link to="/aws-training-in-chennai/" className='btn-transparent sm-size heading-color'>Learn More <i class="icon-arrow-right-line-right"></i></Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
                    <div class="col-md-4 sal-animate" data-sal-delay="250" data-sal="slide-up" data-sal-duration="800">
                        <div class="service-card service-card-3 text-left shape-bg-3 bg-grey">
                        <div class="inner">
                                <div class="icon">
                                     <img src={powerBi} alt="powerBi" className='img-fluid' />
                                </div>
                                <div class="content">
                                    <h6 class="title">Power BI Training</h6>
                                    <p class="description">Microsoft Power BI Course Helps You Learn Advanced Business Intelligence Tools And Concepts To Analyze And Visualize Data. Master Concepts Such As Power BI Desktop, Architecture, Service, DAX, Apps, Reports, Etc.</p>
                                    <div class="read-more-btn">
                                        <Link to="/power-bi-training-in-chennai/" className='btn-transparent sm-size heading-color'>Learn More <i class="icon-arrow-right-line-right"></i></Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          
                    <div class="col-md-4 sal-animate" data-sal-delay="250" data-sal="slide-up" data-sal-duration="800">
                        <div class="service-card service-card-3 text-left shape-bg-3 bg-grey">
                        <div class="inner">
                                <div class="icon">
                                     <img src={pythonimg} alt="python-training" className='img-fluid' />
                                </div>
                                <div class="content">
                                    <h6 class="title">Python Training</h6>
                                    <p class="description">Elevate your skills with Python Training in Chennai at Aimore Technology! Join us to master Python programming and unlock endless opportunities</p>
                                    <div class="read-more-btn">
                                        <Link to="/python-training-in-chennai/" className='btn-transparent sm-size heading-color'>Learn More <i class="icon-arrow-right-line-right"></i></Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 sal-animate" data-sal-delay="250" data-sal="slide-up" data-sal-duration="800">
                        <div class="service-card service-card-3 text-left shape-bg-3 bg-grey">
                        <div class="inner">
                                <div class="icon">
                                     <img src={fullstack} alt="python-training" className='img-fluid' />
                                </div>
                                <div class="content">
                                    <h6 class="title">Full Stack  Training</h6>
                                    <p class="description">Embark on a journey to become a Full Stack Developer! Join Aimore Technology's training in Chennai and master the art of full-stack development.</p>
                                    <div class="read-more-btn">
                                        <Link to="/full-stack-developer-course-in-chennai/" className='btn-transparent sm-size heading-color'>Learn More <i class="icon-arrow-right-line-right"></i></Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 sal-animate" data-sal-delay="250" data-sal="slide-up" data-sal-duration="800">
                        <div class="service-card service-card-3 text-left shape-bg-3 bg-grey">
                        <div class="inner">
                                <div class="icon">
                                     <img src={bestsoftware} alt="best-software-training" className='img-fluid' />
                                </div>
                                <div class="content">
                                    <h6 class="title">Software Training Course</h6>
                                    <p class="description">Master cutting-edge technologies with expert guidance at our top-rated institute. Unlock your potential today!</p>
                                    <div class="read-more-btn">
                                        <Link to="/best-software-training-institute-in-chennai/" className='btn-transparent sm-size heading-color'>Learn More <i class="icon-arrow-right-line-right"></i></Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

               
            </div>

            <div class="eduvibe-home-five-progress edu-service-area edu-section-gap bg-image">
         
            <div class="container eduvibe-animated-shape">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center sal-animate py-5" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                           
                            <h2 class="title">Let’s have a look at some of the factors that help <br/>shape our profile as an IT training institute.</h2>
                          <p className='py-3 '>Aimore Technology strives to offer IT Training with tailor-made placement programs for the Indian market. Our IT Training Institute in Chennai offers a wide range of courses, with a definite focus on Web Development, Software Testing, SnowFlake, Python, AWS, Data Science Etc. We believe that a candidate should be able to carry their learning forward by using it in their day-to-day work.</p>
                          <p className='py-1'>Hence, our team of experts regularly conducts webinars and seminars on relevant topics. This not only helps us maintain the standards of our curriculum but also guides new trainees who are looking for avenues where they can implement what they have learned from our IT Training Institute in Chennai.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                         <h2 className='title'>Why Choose Aimore Technology for the Software Training Institute in Chennai?</h2>
                         <p>Aimore Technology offers a range of IT courses in Chennai for freshers and professionals. The courses are designed to meet the requirements of industry and equip students with relevant skills that are in demand. As one of the leading IT Training Institute in Chennai, we ensure that our candidates get adequate exposure to all aspects related to IT. We offer flexible timings, high-quality learning resources, and instructors with years of experience teaching at top institutes. If you’re looking for an IT Training Institute in Chennai, look no further than Aimore Technology.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={whychoose} alt="why-choose-aimore" />
                    </div>
                </div>
                
           
 

            </div>
         
        </div>

        </div>
       
    )
}

export default Home
