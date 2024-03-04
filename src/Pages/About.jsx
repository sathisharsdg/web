import React from 'react'
import { Helmet } from 'react-helmet'
import aboutBanner from "../assets/images/about-banner.webp" 
import Commonpopup from '../Components/Commonpopup'
import { Link } from 'react-router-dom'
 
function About() {
    return (
        <div>
            <Helmet>
                <title>About Page</title>
                <link rel="canonical" href="https://aimoretechnology.com/about-us" />
            </Helmet>
            <div class="edu-breadcrumb-area breadcrumb-style-1 ptb--60 ptb_md--40 ptb_sm--40 bg-image ">
                <div class="container eduvibe-animated-shape">
                    <div class="row"><div class="col-lg-12">
                        <div class="breadcrumb-inner text-start">
                            <div class="page-title">
                                <h1 class="title">About us</h1>
                            </div><nav class="edu-breadcrumb-nav">
                                <ol class="edu-breadcrumb d-flex justify-content-start liststyle"><li class="breadcrumb-item"><a href="/">Home</a> </li><li class="separator"><i class="ri-arrow-drop-right-line"></i></li><li class="breadcrumb-item active" aria-current="page">About us</li></ol></nav>
                                
<Link class="edu-btn subpage-btn-top" data-bs-target="#staticBackdropNew" data-bs-toggle="modal">Enroll Now <i class="icon-arrow-right-line-right"></i></Link>
                                </div>
                    </div></div><div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                       
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-7">
                        <p >Welcome to Aimore Technology, your premier destination for cutting-edge software training in Chennai! With over 12 years of experience in the industry, we have been at the forefront of empowering learners with the skills they need to thrive in today's digital world.</p>
                        <p >At Aimore Technology, we offer a diverse range of 100+ courses designed to cater to the evolving needs of the IT landscape. Whether you're interested in programming languages, web development, data science, cybersecurity, or any other aspect of technology, we have the perfect course for you.</p>
                        <p >With a community of over 13,000 delighted learners, we take pride in our commitment to delivering top-notch education and ensuring that each of our students achieves their fullest potential. Our success is reflected in the success stories of our graduates who have gone on to excel in their careers and make a significant impact in the tech industry.</p>
                        <p >With three convenient locations in Medavakkam, Porur, and Karapakkam, we strive to make our courses accessible to aspiring professionals from all walks of life. Our state-of-the-art facilities, experienced instructors, and hands-on learning approach ensure that you receive the highest quality education possible.</p>
                        <p >At Aimore Technology, we believe in the power of continuous learning and personal growth. That's why we are committed to staying abreast of the latest trends and technologies, constantly updating our curriculum to reflect the demands of the ever-changing industry.</p>
                        <p >Whether you're a fresh graduate looking to kickstart your career, a seasoned professional aiming to upskill, or someone simply passionate about technology, Aimore Technology is your trusted partner on your journey to success.</p>
                        <p >Join us today and experience the difference that quality education and personalized attention can make in your life. Discover why thousands of learners have chosen Aimore Technology as their preferred destination for software training in Chennai. Your future starts here!</p>
                    </div>
                    <div className="col-md-5">
                         <img src={aboutBanner} alt="about-banner" />
                         <div className='text-center'>
                         <Link class="edu-btn" data-bs-target="#staticBackdropNew" data-bs-toggle="modal">To Know More<i class="icon-arrow-right-line-right"></i></Link>
 
                         </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="staticBackdropNew" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Commonpopup/>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
