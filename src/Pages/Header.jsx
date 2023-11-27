import React ,{useEffect}from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "../App.css";
 

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

 
    return (
        <div>
            <header class="edu-header header-style-2 header-transparent header-sticky">
            <div class="row align-items-center">
                <div class="col-lg-6 col-xl-3 col-md-6 col-6">
                    <div class="logo">
                        <a href="index.html">
                            <img class="logo-light" src="assets/images/logo/Aimore-logo.svg" alt="Site Logo"/>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 d-none d-xl-block">
                    <nav class="mainmenu-nav">
                        <ul class="mainmenu">
                            <li><a href="#">Home</a>                         
                            </li>
                            <li><a href="#">About Us</a>                         
                            </li>
                            <li class="has-droupdown"><a href="#">Courses</a>
                                <ul class="submenu">
                                    <li><a href="#">Power BI Training</a></li>
                                    <li><a href="#">Snow Flake Training</a></li>
                                    <li><a href="#">Selenium Training</a></li>
                                    <li><a href="#">Aws Training</a></li>
                                    <li><a href="#">Python Training</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact</a>                         
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="col-lg-6 col-xl-3 col-md-6 col-6">
                    <div class="header-right d-flex justify-content-end">
                        <div class="header-menu-bar">

                            <div class="quote-icon quote-user d-none d-md-block ml--15">
                                <a class="edu-btn btn-medium left-icon btn-white" href="login-register.html"><i class="ri-user-line"></i>Quick Contact</a>
                            </div>

                            <div class="quote-icon quote-user d-block d-md-none ml--15 ml_sm--5">
                                <a class="white-box-icon" href="login-register.html"><i class="ri-user-line"></i></a>
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
                        <a href="index.html">
                            <img src="assets/images/logo/Aimore-logo.svg" alt="Site Logo"/>
                        </a>
                    </div>
                    <div class="close-menu">
                        <button class="close-button" onClick={closeSidebar}>
                            <i class="ri-close-line"></i>
                        </button>
                    </div>
                </div>
                <ul class="mainmenu">
                            <li><a href="#">Home</a>                         
                            </li>
                            <li><a href="#">About Us</a>                         
                            </li>
                            <li class="has-droupdown" onClick={showSubmenu}>
                                <a href="#">Coursers</a>
                                <ul class="submenu">
                                    <li><a href="#">Power BI Training</a></li>
                                    <li><a href="#">Snow Flake Training</a></li>
                                    <li><a href="#">Selenium Training</a></li>
                                    <li><a href="#">Aws Training</a></li>
                                    <li><a href="#">Python Training</a></li>
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
