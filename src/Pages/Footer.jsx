import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div>
            <footer class="eduvibe-footer-one edu-footer footer-style-default">
                <div class="footer-top">
                    <div class="container eduvibe-animated-shape">
                        <div class="row g-5">
                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="edu-footer-widget">
                                    <div class="logo">
                                        <a href="index.html">
                                            <img class="logo-light" src="/assets/images/logo/Aimore-logo-white.svg" alt="Site Logo" />
                                        </a>
                                    </div>
                                    <p class="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                                    <ul class="social-share">
                                        <li><a href="https://www.facebook.com/aimoretechnologies/"><i class="icon-Fb"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/aimore-technologies-78237b179/?originalSubdomain=in"><i class="icon-linkedin"></i></a></li>
                                        <li><a href="https://www.youtube.com/channel/UC1xJg649I7UOr1WW669Sb7A"><i class="ri-youtube-line"></i></a></li>
                                        <li><a href="https://api.whatsapp.com/send?phone=919176333334"><i class="ri-whatsapp-line"></i></a></li>
                                        <li><a href="https://www.instagram.com/aimoretechnologies/"><i class="ri-instagram-line"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="edu-footer-widget explore-widget">
                                    <h5 class="widget-title">Explore</h5>
                                    <div class="inner">
                                        <ul class="footer-link link-hover">
                                            <li> <Link to='/about-us'> <i class="icon-Double-arrow"></i>About Us</Link></li>
                                            <li> <Link to='/contact-us'> <i class="icon-Double-arrow"></i>Contact Us</Link></li>
                                            <li>  <Link to='/power-bi-training-in-chennai/'><i class="icon-Double-arrow"></i>Power BI Training</Link></li>
                                            <li> <Link to='/selenium-training-in-chennai/'><i class="icon-Double-arrow"></i>Selenium Training</Link></li>
                                            <li>   <Link to='/aws-training-in-chennai/' ><i class="icon-Double-arrow"></i>AWS Training</Link></li>
                                            <li><Link to='/python-training-in-chennai/'><i class="icon-Double-arrow"></i>Python Training</Link></li>
                                            <li><Link to="/best-software-training-institute-in-chennai/"><i class="icon-Double-arrow"></i> Best Software Training</Link></li>
                                            <li><Link to="/full-stack-developer-course-in-chennai/"><i class="icon-Double-arrow"></i> Fullstack Developer Training</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="edu-footer-widget">
                                    <h5 class="widget-title">Contact Us</h5>

                                    <div class="inner">
                                        <div class="widget-information">
                                            <h2 className='text-white pb-2'><i class="icon-map-pin-line me-2"></i> Medavakkam Branch </h2>
                                       
                                            <h4 className='text-white mb-3'>
                                                3/165, Sumangali Second floor,<br />
                                                Perumbakkam Main Rd, Medavakkam,<br />
                                                Chennai, Tamil Nadu - 600100
                                            </h4>
                                  
                                            <h2 className='text-white pb-2'><i class="ri-phone-line me-2"></i> Call us </h2>
                                            <h4 className='text-white mb-3'>
                                            <Link to="tel:+91 9176333334">+91 9176-333-334</Link><br/>
                                            <Link to="tel:+91 9962698698">+91 9962-698-698</Link>
                                            <hr/>
                                            </h4>
                                           
                                            <h2 className='text-white pb-2'><i class="icon-map-pin-line me-2"></i> Porur Branch </h2>
                                            <h4 className='text-white mb-3'>
                                                No 112/2, Door No 140/104, First Floor,<br />
                                                Phase 1 Mount Poonamallee Trunk Rd, Porur,<br />
                                                Chennai, Tamilnadu - 600116
                                            </h4>
                                            
                                            <h2 className='text-white pb-2'><i class="ri-phone-line me-2"></i> Call us </h2>
                                            <h4 className='text-white mb-3'>                                            
                                                <Link to="tel:+91 9159333334">+91 9159-333-334</Link><br/>
                                               <Link to="tel:+91 9786400004">+91 9786-400-004</Link>  
                                               <hr/>                                      
                                            </h4>
                                            <h2 className='text-white pb-2'><i class="icon-map-pin-line me-2"></i> Karappakkam Branch </h2>
                                            <h4 className='text-white mb-3'> 
                                                1/16/2, Rajiv Gandhi Road<br />
                                                (Old Mahabalipuram Road),Karapakkam(N198),<br />
                                                Chennai, Tamil Nadu - 600097
                                            </h4>
                                            <h2 className='text-white pb-2'><i class="ri-phone-line me-2"></i> Call us </h2>
                                            <h4 className='text-white mb-3'>                             
                                                <Link to="tel:+91 9655333334">+91 9655-333-334</Link><br/>
                                               <Link to="tel:+91 9962898898">+91 9962-898-898</Link>
                                               
                                            </h4>
                                         

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
