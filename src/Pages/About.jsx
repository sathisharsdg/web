import React from 'react'
import { Helmet } from 'react-helmet'
import aboutBanner from "../assets/images/about-banner.png" 
function About() {
    return (
        <div>
            <Helmet>
                <title>About Page</title>
            </Helmet>
            <div class="edu-breadcrumb-area breadcrumb-style-1 ptb--60 ptb_md--40 ptb_sm--40 bg-image">
                <div class="container eduvibe-animated-shape">
                    <div class="row"><div class="col-lg-12">
                        <div class="breadcrumb-inner text-start">
                            <div class="page-title">
                                <h1 class="title">About us</h1>
                            </div><nav class="edu-breadcrumb-nav">
                                <ol class="edu-breadcrumb d-flex justify-content-start liststyle"><li class="breadcrumb-item"><a href="/">Home</a> </li><li class="separator"><i class="ri-arrow-drop-right-line"></i></li><li class="breadcrumb-item active" aria-current="page">About us</li></ol></nav></div>
                    </div></div><div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                            <div class="shape-image shape-image-1">
                                <img src="/assets/images/shapes/shape-11-07.png" alt="Shape Thumb" />
                            </div>
                            <div class="shape-image shape-image-2">
                                <img src="/assets/images/shapes/shape-01-02.png" alt="Shape Thumb" />
                            </div>
                            <div class="shape-image shape-image-3">
                                <img src="/assets/images/shapes/shape-03.png" alt="Shape Thumb" />
                            </div>
                            <div class="shape-image shape-image-4">
                                <img src="/assets/images/shapes/shape-13-12.png" alt="Shape Thumb" />
                            </div>
                            <div class="shape-image shape-image-5">
                                <img src="/assets/images/shapes/shape-36.png" alt="Shape Thumb" />
                            </div>
                            <div class="shape-image shape-image-6">
                                <img src="/assets/images/shapes/shape-05-07.png" alt="Shape Thumb" /></div></div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
