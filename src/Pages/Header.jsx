import React ,{useEffect, useLayoutEffect}from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "../App.css";
import { Link } from 'react-router-dom';
import Popupform from '../Components/Popupform';
import "../assets/css/Header.css"

function Header() {
    useLayoutEffect(()=>{
        setTimeout(()=>{
             document.getElementById("staticBackdrop").click();
        },3000)
    })
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };

    });
    const sticky = (e) => {
        const header = document.querySelector('.header-sticky');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };

 
 

   const showSubmenu = ()=>{
        let div = document.querySelector(".popup-mobile-menu .submenu");
        div.classList.toggle("showingSubmenu")
     }
      const showSidebar = ()=>{
          let elm = document.querySelector(".popup-mobile-menu");
          elm.classList.add("active");
      }
      const closeSidebar = ()=>{
          let elm = document.querySelector(".popup-mobile-menu");
          elm.classList.remove("active");
      }
      const closeMobile = ()=>{
        closeSidebar();
      }
     

 
    return (
        <div>
            <div className="stickynavbtn">
                <Link  data-bs-target="#staticBackdrop" data-bs-toggle="modal">Qucik Enquiry</Link>
            </div>
            <header class="edu-header header-style-2 header-transparent header-sticky">
            <div class="row align-items-center">
                <div class="col-lg-6 col-xl-3 col-md-6 col-6">
                    <div class="logo">
                        <Link to="/">
                            <img class="logo-light" src="/assets/images/logo/Aimore-logo.svg" alt="Site Logo"/>
                       </Link>
                    </div>
                </div>

                <div class="col-lg-6 d-none d-xl-block">
                    <nav class="mainmenu-nav">
                        <ul class="mainmenu">
                            <li> <Link to="/">Home</Link>                     
                            </li>
                            <li> <Link to="/about-us">About Us</Link>                        
                            </li>
                            <li class="has-droupdown"><a href="#">Courses</a>
                                <ul class="submenu">
                                    <li><Link to="/power-bi-training-in-chennai/">Power BI Training</Link></li>
                                    
                                    <li><Link to="/selenium-training-in-chennai/">Selenium Training</Link></li>
                                    <li><Link to="/aws-training-in-chennai/">Aws Training</Link></li>
                                    <li><Link to="/python-training-in-chennai/">Python Training</Link></li>
                                    <li><Link to="/best-software-training-institute-in-chennai/">Best Software Training</Link></li>
                                    <li><Link to="/full-stack-developer-course-in-chennai/">Fullstack Developer Training</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="contact-us">Contact Us</Link>                        
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="col-lg-6 col-xl-3 col-md-6 col-6">
                    <div class="header-right d-flex justify-content-end">
                        <div class="header-menu-bar">

                            <div class="quote-icon quote-user d-none d-md-block ml--15">
                            <Link to="contact-us" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edu-btn btn-medium left-icon btn-white"><i class="ri-user-line"></i> Quick Contact</Link> 
                                
                            </div>

                      

                            <div class="mobile-menu-bar ml--15 ml_sm--5 d-block d-xl-none">
                                <div class="hamberger">
                                    <button class="white-box-icon hamberger-button" onClick={showSidebar}>
                                        <i class="ri-menu-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="popup-mobile-menu">
            <div class="inner">
                <div class="header-top">
                    <div class="logo">
                      <Link to="/">
                            <img src="/assets/images/logo/Aimore-logo.svg" alt="Site Logo"/>
                       </Link>
                    </div>
                    <div class="close-menu">
                        <button class="close-button" onClick={closeSidebar}>
                            <i class="ri-close-line"></i>
                        </button>
                    </div>
                </div>
                <ul class="mainmenu">
                            <li> <Link to="/" onClick={closeMobile}>Home</Link>                      
                            </li>
                            <li><Link to="/about-us/" onClick={closeMobile}>About Us</Link>                       
                            </li>
                            <li class="has-droupdown" onClick={showSubmenu}>
                                <a href="#">Coursers</a>
                                <ul class="submenu">
                                    <li><Link to="/power-bi-training-in-chennai/" onClick={closeMobile}>Power BI Training</Link></li>       
                                    <li><Link to="/selenium-training-in-chennai/" onClick={closeMobile}>Selenium Training</Link></li>
                                    <li><Link to="/aws-training-in-chennai/" onClick={closeMobile}>Aws Training</Link></li>                                    
                                    <li><Link to="/python-training-in-chennai/" onClick={closeMobile}>Python Training</Link></li>
                                    <li><Link to="/best-software-training-institute-in-chennai/" onClick={closeMobile}>Best Software Training</Link></li>
                                    <li><Link to="/full-stack-developer-course-in-chennai/" onClick={closeMobile}>Fullstack Developer Training</Link></li>
                                 
                                </ul>
                            </li>
                            <li> <Link to="/contact-us/" onClick={closeMobile}>Contact</Link>                   
                            </li>
                        </ul>
            </div>
        </div>

           {/* Common-diallog */}
          <div>
          
 

 
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <Popupform/>
      </div>
  
    </div>
  </div>
</div>
          </div>
 
        </div>
    )
}

export default Header
