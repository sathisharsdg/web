import React from 'react'
import { Helmet } from 'react-helmet'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
import bestgateway from "../assets/images/homepage/best-way-to-enter-it-industry.png"
import bestSoftware from "../assets/images/homepage/Software-Training-Institute-in-Chennai-with-Placements.png"
import upskill from "../assets/images/homepage/Up-skill-yourself-with-aimore-technologies.png"
import increase from "../assets/images/homepage/increase-career-opportunities-with-aimore.png"
import numerous from "../assets/images/homepage/Numerous-Advantages-of-Joining-Aimore-Technology.png"
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
                                <img src={homeMainbanner} alt="home" className='img-fluid' />
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

                                <h2 class="title">Let’s have a look at some of the factors that help <br />shape our profile as an IT training institute.</h2>
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



            <div class="eduvibe-about-two-award edu-winner-area edu-section-gap bg-color-white">
                <div class="container eduvibe-animated-shape">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 class="title">Why You choose Us</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row g-5 mt--20">
                        <div class="col-lg-4 col-md-4 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div class="edu-winner-card">
                                <div class="inner">
                                    <div class="content">
                                        <h1><i class="ri-vip-crown-fill"></i></h1>
                                        <h2 class="title mb-3">12 Years Of Experience</h2>
                                        <p>Aimore Technology Started Its Journey In 2010 As A Software Training Institute in Chennai. Since Our Journey Started We have offered 150+ Different Types Of Software Courses Like Oracle, Web Development, Linux, Selenium, Unix, Java, Dot Net, Cloud Computing, Data Science, AWS, And More…</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div class="edu-winner-card">
                                <div class="inner">
                                    <div class="content">
                                        <h1><i class="ri-emotion-happy-line"></i></h1>
                                        <h2 class="title mb-3">13,000+ Happy Students</h2>
                                        <p>We Trained Over 13,000+ Students To Reach Their Career Goals. Also, We Not Only Help Them To Learn About The Software But Also Prepare Them To Face The Interview With Good Attitude And Knowledge. We Have Provided 100% Results To The Students Who Are Learning In Aimore Technology With Placements In Top MNCs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div class="edu-winner-card">
                                <div class="inner">
                                    <div class="content">
                                        <h1><i class="ri-thumb-up-line"></i></h1>
                                        <h2 class="title mb-3">100% Placement Guaranteed</h2>
                                        <p>Studying In An Institute, People Always Come Up With Two Reasons In Their Mind. The First Thing Is To gain knowledge Of The Respective Courses, And The Second One Is Obviously, To Get The Placements In Top Companies As Per CTC Standards. Aimore Technology Is a Stop Solution, To Gain Knowledge And Placement At The Time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div class="edu-winner-card">
                                <div class="inner">
                                    <div class="content">
                                        <h1><i class="ri-terminal-window-line"></i></h1>
                                        <h2 class="title mb-3">Real-Time & Experienced Faculty</h2>
                                        <p>At Aimore Technology, You Will Learn From Experts Who Work On Top-Level MNC Companies Dedicated To Sharing Their Knowledge With Their Learners To Achieve Their Goals. Everyone Is Personally Mentored By Industry Experts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div class="edu-winner-card">
                                <div class="inner">
                                    <div class="content">
                                        <h1><i class="ri-service-line"></i></h1>
                                        <h2 class="title mb-3">100% Legible Certificate</h2>
                                        <p>Once The Candidate Finished The Course. The Candidates Should Get Their Respective Course Certificates Provided By Aimore Technology. You Can Use The Certificate Anywhere. The Certificate Is Legit You Can Use It For Global Purposes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div class="edu-winner-card">
                                <div class="inner">
                                    <div class="content">
                                        <h1><i class="ri-price-tag-3-line"></i></h1>
                                        <h2 class="title mb-3">Affordable Fees With Great Quality</h2>
                                        <p>Aimore Technology, Our Motto is Quality Training at Affordable Fees. “Your Great Goals Come With Fewer Fees". Also, Our Students say, we are the software training institute in Chennai.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div class="edu-winner-card">
                                <div class="inner">
                                    <div class="content">
                                        <h1><i class="ri-questionnaire-line"></i></h1>
                                        <h2 class="title mb-3">Interview Preparation Help By Trainers</h2>
                                        <p>Aimore Technology, Our Motto is Quality Training at Affordable Fees. “Your Great Goals Come With Fewer Fees". Also, Our Students say, we are the software training institute in Chennai.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div class="edu-winner-card">
                                <div class="inner">
                                    <div class="content">
                                        <h1><i class="ri-timer-line"></i></h1>
                                        <h2 class="title mb-3">Study at Your Own Pace</h2>
                                        <p>Enhance Your Professional Journey by Acquiring In-Demand Skills</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div class="edu-winner-card">
                                <div class="inner">
                                    <div class="content">
                                        <h1><i class="ri-timer-line"></i></h1>
                                        <h2 class="title mb-3">Flexible & Convenient Timings</h2>
                                        <p>One Of The Best Things about studying At Aimore Technology Is That You Can Learn The Course at your Comfortable Time. It Will Be A Relief For Professionals Who Manage Their Time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row py-3">
                        <div className="col-md-12 text-center">
                            <a class="edu-btn" href="/contact-us">GET STARTED <i class="icon-arrow-right-line-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="edu-service-area service-wrapper-3">
                <div class="about-us-two-service-wrapper edu-section-gapTop bg-image position-relative">
                    <div class="eduvibe-about-us-two-service ">
                        <div class="container eduvibe-animated-shape">

                            <div class="row eduvibe-about-one-service g-5 mt--20">
                                <div class="col-md-6  sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <div class="service-card service-card-3 text-left shape-bg-1">
                                        <div class="inner">

                                            <div class="content">
                                                <h3 class="title">The Gateway to Success to Enter in the IT Industry</h3>
                                                <p class="description">Aimore Technology welcomes candidates with diverse skills, providing them with all the necessary knowledge and helping them build their careers. The best software IT training institute in Chennai also helps candidates build a successful career by guiding them on what they should do next. They offer employment opportunities for those who want to work on their terms.<br />
                                                    Aimore Technology excels at finding out what kind of candidate they are and helping them get started on the right foot by guiding them through various courses that are tailored specifically for that particular candidate’s needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6  sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                     
                                     <img src={bestgateway}alt="Gateway to Success to Enter in the IT Industry" />
                                    
                                </div>
                                <div class="col-md-6  sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                     
                                     <img src={bestSoftware}alt="Software Training Institute in Chennai with Placements" />
                                    
                                </div>
                                <div class="col-md-6  sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <div class="service-card service-card-3 text-left shape-bg-1">
                                        <div class="inner">

                                            <div class="content">
                                                <h3 class="title">Software Training Institute in Chennai with Placements</h3>
                                                <p class="description">Aimore Technology, the fastest-growing IT Training Institute in Chennai offers a wide variety of courses for students and professionals. Aimore Technology's courses are designed per the latest industry trends and requirements. With industry-leading trainers, we ensure that our students are always updated with all new skills required by them. <br />
                                                    Our placement team is dedicated to securing prompt placements for our candidates in their preferred positions upon course completion. We consider it a significant accomplishment when we witness a candidate achieving placement at their dream company.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6  sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <div class="service-card service-card-3 text-left shape-bg-1">
                                        <div class="inner">

                                            <div class="content">
                                                <h3 class="title">Up-skill yourself with the best It software training institute in Chennai</h3>
                                                <p class="description">The best IT training institute in Chennai helps freshers and working professionals alike to up-skill themselves with the latest technologies. They offer a wide range of courses from AWS, Java, Python, Data Science, Power BI, AI, ML, etc. Their well-trained faculty provides input on how students can get an edge over others by developing their skills and knowledge about specific topics. In addition, they also have workshops that help develop soft skills like time management, leadership skills, and team building.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6  sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                     
                                     <img src={upskill}alt="Up-skill yourself with the best It software training institute in Chennai" />
                                    
                                </div>
                                <div class="col-md-6  sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                     
                                     <img src={increase}alt="Increase Your Career Opportunities with Aimore Technology" />
                                    
                                </div>
                                <div class="col-md-6  sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <div class="service-card service-card-3 text-left shape-bg-1">
                                        <div class="inner">

                                            <div class="content">
                                                <h3 class="title">Increase Your Career Opportunities with Aimore Technology </h3>
                                                <p class="description">Aimore provides a variety of courses like web designing, Java, Python, Selenium, and much more. These courses are available for people with diverse skill sets and backgrounds. Aimore also provides quality training for students who want to gain experience before they enter the job market.<br /> Aimore’s teaching methodology is based on active learning. This helps candidates retain knowledge better because they are involved in its creation process. The educators at Aimore also provide individual attention to each student so that they can excel in their respective fields.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6  sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <div class="service-card service-card-3 text-left shape-bg-1">
                                        <div class="inner">

                                            <div class="content">
                                                <h3 class="title">Numerous Advantages of Joining Aimore Technology – Best Software Training Institute in Chennai </h3>
                                                <p class="description">Aimore Technology has been a top provider of IT training courses in Chennai for more than 12 years. We offer a wide range of courses at all levels including vocational, certification, and degree programs. <br />
                                                    Aimore offers different types of classes including Classroom and online courses. One can choose from a wide range of certification programs such as Oracle, Data Science, Azure, Aws, DevOps, etc.<br />
                                                    Our team consists of expert faculty who have been teaching for over 12 years and are well-versed with the latest technologies and trends. Our students are given hands-on training by our experienced professionals from leading organisations like CTS, TCS, etc. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6  sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                     
                                     <img src={numerous}alt="Numerous Advantages of Joining Aimore Technology" />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>

    )
}

export default Home
