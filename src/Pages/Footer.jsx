import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div>
            <footer class="eduvibe-footer-one edu-footer footer-style-default">
                <div class="footer-top">
                    <div class="container eduvibe-animated-shape">
                        <div class="row g-5">
                            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div class="edu-footer-widget">
                                    <div class="logo">
                                        <a href="index.html">
                                            <img class="logo-light" src="/assets/images/logo/Aimore-logo-white.svg" alt="Site Logo" />
                                        </a>
                                    </div>
                                    <p class="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                                    <ul class="social-share">
                                        <li><a href="https://www.facebook.com/aimoretechnologies/"><i class="icon-Fb"></i></a></li>
                                        <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                        <li><a href="#"><i class="icon-Pinterest"></i></a></li>
                                        <li><a href="#"><i class="icon-Twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="edu-footer-widget explore-widget">
                                    <h5 class="widget-title">Explore</h5>
                                    <div class="inner">
                                        <ul class="footer-link link-hover">
                                            <li> <Link to='/about-us'> <i class="icon-Double-arrow"></i>About Us</Link></li>
                                            <li> <Link to='/contact-us'> <i class="icon-Double-arrow"></i>Contact Us</Link></li>
                                            <li>  <Link to='/power-bi-training-in-chennai/'><i class="icon-Double-arrow"></i>Power BI Training</Link></li>
                                            <li> <Link to='/snowflake-training-in-chennai/'><i class="icon-Double-arrow"></i>Snowflake Training</Link></li>
                                            <li> <Link to='/selenium-training-in-chennai/'><i class="icon-Double-arrow"></i>Selenium Training</Link></li>
                                            <li>   <Link to='/aws-training-in-chennai/' ><i class="icon-Double-arrow"></i>AWS Training</Link></li>
                                            <li><Link to='/python-training-in-chennai/'><i class="icon-Double-arrow"></i>Python Training</Link></li>


                                        </ul>
                                    </div>
                                </div>
                            </div>



                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="edu-footer-widget">
                                    <h5 class="widget-title">Contact Us</h5>

                                    <div class="inner">
                                        <div class="widget-information">
                                            <h2 className='text-white pb-2'>Medavakkam Branch</h2>
                                            <h4 className='text-white'>
                                                3/165, Sumangali Second floor,<br />
                                                Perumbakkam Main Rd, Medavakkam,<br />
                                                Chennai, Tamil Nadu - 600100
                                            </h4>
                                            <h2 className='text-white pb-2'>Porur Branch</h2>
                                            <h4 className='text-white'>
                                                No 112/2, Door No 140/104, First Floor,<br />
                                                Phase 1 Mount Poonamallee Trunk Rd, Porur,<br />
                                                Chennai, Tamilnadu - 600116
                                            </h4>
                                            <h2 className='text-white pb-2'>Karapakkam Branch</h2>
                                            <h4 className='text-white'>
                                            1/16/2, Rajiv Gandhi Road<br/>
(Old Mahabalipuram Road),Karapakkam(N198),<br/>
Chennai, Tamil Nadu - 600097
                                            </h4>
                                            {/* <ul class="information-list">
                                                <li><i class="icon-map-pin-line"></i>275 Quadra Street Victoria Road, New York
                                                </li>
                                                <li><i class="icon-phone-fill"></i><a href="tel:+1(237)382-2839">+ 1 (237) 382-2839</a></li>
                                                <li><i class="icon-phone-fill"></i><a href="tel:+1(237)382-2840">+ 1 (237) 382-2840</a></li>
                                                <li><i class="icon-mail-line-2"></i><a target="_blank" href="mailto:yourmailaddress@example.com">yourmailaddress@example.com</a></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="shape-dot-wrapper shape-wrapper d-md-block d-none">
                            <div class="shape-image shape-image-1">
                                <img src="/assets/images/shapes/shape-21-01.png" alt="Shape Thumb" />
                            </div>
                            <div class="shape-image shape-image-2">
                                <img src="/assets/images/shapes/shape-35.png" alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area copyright-default">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="inner text-center">
                                    <p>Copyright © 2023 Aimore Technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
