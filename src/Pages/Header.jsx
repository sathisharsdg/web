import React ,{useEffect}from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "../App.css";
import { Link } from 'react-router-dom';

function Header() {
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
                                    <li><Link to="/snowflake-training-in-chennai/">Snow Flake Training</Link></li>
                                    <li><Link to="/selenium-training-in-chennai/">Selenium Training</Link></li>
                                    <li><Link to="/aws-training-in-chennai/">Aws Training</Link></li>
                                    <li><Link to="/python-training-in-chennai/">Python Training</Link></li>
                                    <li><Link to="/best-software-training-in-chennai/">Best Software Training</Link></li>
                               
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
                            <Link to="contact-us" class="edu-btn btn-medium left-icon btn-white"><i class="ri-user-line"></i> Quick Contact</Link> 
                                
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
                            <li><a href="#" onClick={closeMobile}>Home</a>                         
                            </li>
                            <li><a href="#" onClick={closeMobile}>About Us</a>                         
                            </li>
                            <li class="has-droupdown" onClick={showSubmenu}>
                                <a href="#">Coursers</a>
                                <ul class="submenu">
                                    <li><a href="#" onClick={closeMobile}>Power BI Training</a></li>
                                    <li><a href="#" onClick={closeMobile}>Snow Flake Training</a></li>
                                    <li><a href="#" onClick={closeMobile}>Selenium Training</a></li>
                                    <li><Link to="/aws-training-in-chennai/" onClick={closeMobile}>Aws Training</Link></li>
                                    
                                    <li><a href="#" onClick={closeMobile}>Python Training</a></li>
                                    <li><a href="#" onClick={closeMobile}>Best Software Training</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact</a>                         
                            </li>
                        </ul>
            </div>
        </div>
 
        </div>
    )
}

export default Header
