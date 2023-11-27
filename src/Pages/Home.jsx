import React from 'react'
import $ from 'jquery'
import { Helmet } from 'react-helmet'
function Home() {
    return (
        <div>

            <div class="slider-area banner-style-5 bg-image">
                <div class="wrapper d-flex align-items-center">
                    <div class="container">
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-6 order-2 order-lg-1">
                                <div class="inner pt--100 pt_md--0 pt_sm--0">
                                    <div class="content text-start">
                                        <h1 class="title sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Dominate the Tech Terrain</h1>
                                        <p class="description sal-animate" data-sal-delay="250" data-sal="slide-up" data-sal-duration="800">Accelerate your career, multiply your opportunities- Pave your path to in-demand skills for an unbeatable tech career.</p>
                                        <div class="read-more-btn sal-animate" data-sal-delay="350" data-sal="slide-up" data-sal-duration="800">
                                            <a class="edu-btn" href="#">Get Started
                                                <i class="icon-arrow-right-line-right"></i>
                                            </a>
                                            <div class="video-btn-wrapper">
                                                <a href="https://www.youtube.com/watch?v=pNje3bWz7V8" class="video-play-btn with-animation video-popup-activation">
                                                    <span class="play-icon"></span>
                                                </a>
                                                <span class="video-text">Watch Video</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 order-1 order-lg-2">
                                <div class="banner-image">
                                    <div class="thumbnail">
                                        <img src="assets/images/banner/banner-05/banner-04.png" alt="Banner Images" />
                                    </div>
                                    <div class="card-info bounce-slide">
                                        {/* <div class="inner">
                                        <div class="name">Shophia D. <span>/ Professior</span></div>
                                        <div class="rating-wrapper d-flex">
                                            <div class="rating eduvibe-course-rating-stars">
                                                <i class="icon-Star"></i>
                                                <i class="icon-Star"></i>
                                                <i class="icon-Star"></i>
                                                <i class="icon-Star"></i>
                                                <i class="icon-Star"></i>
                                            </div>
                                            <span>(2567)</span>
                                        </div>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div class="shape-image shape-image-1">
                        <img src="assets/images/shapes/shape-07.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-2">
                        <img src="assets/images/shapes/shape-03-05.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-3">
                        <img src="assets/images/shapes/shape-05-04.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-4">
                        <img src="assets/images/shapes/shape-06.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-5">
                        <img src="assets/images/shapes/shape-01-03.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-6">
                        <img src="assets/images/shapes/shape-01-04.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>


            <div className="container py-5 mb-5 mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="50000">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div class="single-slick-card">
                                                <div class="service-card service-card-8 shape-bg-2">
                                                    <div class="inner">
                                                        <div class="icon">
                                                            <a href="#" tabindex="0">
                                                                <img src="assets/images/category/category-04/category-02.png" alt="Icons" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h6 class="title"><a href="#" tabindex="0">Content Writting</a></h6>
                                                            <span>39 Items</span>
                                                        </div>
                                                        <div class="hover-action">
                                                            <a class="read-more-btn" href="#" tabindex="0"><i class="icon-arrow-right-line-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="single-slick-card">
                                                <div class="service-card service-card-8 shape-bg-3">
                                                    <div class="inner">
                                                        <div class="icon">
                                                            <a href="#" tabindex="0">
                                                                <img src="assets/images/category/category-04/category-03.png" alt="Icons" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h6 class="title"><a href="#" tabindex="0">Data Science</a></h6>
                                                            <span>15 Items</span>
                                                        </div>
                                                        <div class="hover-action">
                                                            <a class="read-more-btn" href="#" tabindex="0"><i class="icon-arrow-right-line-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="single-slick-card">
                                                <div class="service-card service-card-8 shape-bg-2">
                                                    <div class="inner">
                                                        <div class="icon">
                                                            <a href="#" tabindex="0">
                                                                <img src="assets/images/category/category-04/category-02.png" alt="Icons" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h6 class="title"><a href="#" tabindex="0">Content Writting</a></h6>
                                                            <span>39 Items</span>
                                                        </div>
                                                        <div class="hover-action">
                                                            <a class="read-more-btn" href="#" tabindex="0"><i class="icon-arrow-right-line-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="single-slick-card">
                                                <div class="service-card service-card-8 shape-bg-3">
                                                    <div class="inner">
                                                        <div class="icon">
                                                            <a href="#" tabindex="0">
                                                                <img src="assets/images/category/category-04/category-03.png" alt="Icons" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h6 class="title"><a href="#" tabindex="0">Data Science</a></h6>
                                                            <span>15 Items</span>
                                                        </div>
                                                        <div class="hover-action">
                                                            <a class="read-more-btn" href="#" tabindex="0"><i class="icon-arrow-right-line-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="50000">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div class="single-slick-card">
                                                <div class="service-card service-card-8 shape-bg-2">
                                                    <div class="inner">
                                                        <div class="icon">
                                                            <a href="#" tabindex="0">
                                                                <img src="assets/images/category/category-04/category-02.png" alt="Icons" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h6 class="title"><a href="#" tabindex="0">Content Writting</a></h6>
                                                            <span>39 Items</span>
                                                        </div>
                                                        <div class="hover-action">
                                                            <a class="read-more-btn" href="#" tabindex="0"><i class="icon-arrow-right-line-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="single-slick-card">
                                                <div class="service-card service-card-8 shape-bg-3">
                                                    <div class="inner">
                                                        <div class="icon">
                                                            <a href="#" tabindex="0">
                                                                <img src="assets/images/category/category-04/category-03.png" alt="Icons" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h6 class="title"><a href="#" tabindex="0">Data Science</a></h6>
                                                            <span>15 Items</span>
                                                        </div>
                                                        <div class="hover-action">
                                                            <a class="read-more-btn" href="#" tabindex="0"><i class="icon-arrow-right-line-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="single-slick-card">
                                                <div class="service-card service-card-8 shape-bg-2">
                                                    <div class="inner">
                                                        <div class="icon">
                                                            <a href="#" tabindex="0">
                                                                <img src="assets/images/category/category-04/category-02.png" alt="Icons" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h6 class="title"><a href="#" tabindex="0">Content Writting</a></h6>
                                                            <span>39 Items</span>
                                                        </div>
                                                        <div class="hover-action">
                                                            <a class="read-more-btn" href="#" tabindex="0"><i class="icon-arrow-right-line-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="single-slick-card">
                                                <div class="service-card service-card-8 shape-bg-3">
                                                    <div class="inner">
                                                        <div class="icon">
                                                            <a href="#" tabindex="0">
                                                                <img src="assets/images/category/category-04/category-03.png" alt="Icons" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h6 class="title"><a href="#" tabindex="0">Data Science</a></h6>
                                                            <span>15 Items</span>
                                                        </div>
                                                        <div class="hover-action">
                                                            <a class="read-more-btn" href="#" tabindex="0"><i class="icon-arrow-right-line-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
