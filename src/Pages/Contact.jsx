import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef()
  const [urls, setUrls] = useState("")  
  const [message, setMessage] = useState("");
  useEffect(()=>{
    setUrls(window.location.href)
  },[])
  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_m2qphau', 'template_fuxwcph', form.current, 'R1muJOWgzl2ngf6ye')
      .then((result) => {
        setMessage("Form Submitted Successfully..")       
          console.log(result.text);
          
      }, (error) => {
        setMessage("Something went wrong..")
          console.log(error.text);
      });
      form.current.reset();
     
  };
  return (
    <div>
      <Helmet>
        <title>
          Contact us | Aimore Technology
        </title>
        <meta
          name="description"
          content="Aimore Technologies is top-ranked and the best software training institute in Chennai. Elevate your skills with expert guidance and hands-on."
        />
        <meta
          name="keywords"
          content="Best Software Training Institute in Chennai, Software Training Institute in Chennai,  IT Training Institute in Chennai, IT Courses in Chennai"
        />
      </Helmet>
      <div className="edu-breadcrumb-area breadcrumb-style-1 ptb--60 ptb_md--40 ptb_sm--40 bg-image">
        <div className="container eduvibe-animated-shape">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-start">
                <div className="page-title">
                  <h1 className="title">
                    Contact us
                  </h1>
                </div>
                <nav className="edu-breadcrumb-nav">
                  <ol className="edu-breadcrumb d-flex justify-content-start liststyle">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>{" "}
                    </li>
                    <li className="separator">
                      <i className="ri-arrow-drop-right-line"></i>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Contact us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
 
        </div>
      </div>

      <div class="edu-contact-us-area eduvibe-contact-us edu-section-gap bg-color-white">
        <div class="container eduvibe-animated-shape">
          <div class="row g-5">
            <div class="col-lg-12">
              <div class="section-title text-center sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                <h3 class="title">Get In Touch With us</h3>
              </div>
            </div>
          </div>
          <div class="row g-5 mt--20">
            <div class="col-lg-7">
              <div class="contact-info  pr_lg--0 pr_md--0 pr_sm--0">
                <div class="row g-5">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div class="contact-address-card-1 website">
                      <div class="inner">

                        <div class="content">
                          <h1 class="title">Medavakkam-Branch</h1>
                          <div className="d-flex align-items-center mb-4">
                            <div class="icon mb-2">
                              <i class="icon-map-pin-line"></i>
                            </div>
                            <p className='mx-3'>3/165, Sumangali Second floor,
                              Perumbakkam Main Road, Medavakkam,
                              Chennai, Tamil Nadu 600100</p>
                          </div>
                          <div className="d-flex align-items-center mb-4">
                            <div class="icon mb-2">
                              <i class="icon-Headphone"></i>
                            </div>
                            <p className='mx-3'>
                              +91 9176-333-334<br />
                              +91 9962-698-698
                            </p>
                          </div>

                          <div className="d-flex align-items-center mb-4">
                            <div class="icon mb-2">
                              <i class="icon-mail-open-line"></i>
                            </div>
                            <p className='mx-3'>
                              info@aimoretechnologies.com
                            </p>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div class="contact-address-card-1 website">
                      <div class="inner">

                        <div class="content">
                          <h1 class="title">Porur-Branch</h1>
                          <div className="d-flex align-items-center mb-4">
                            <div class="icon mb-2">
                              <i class="icon-map-pin-line"></i>
                            </div>
                            <p className='mx-3'>No 112/2, Door No 140/104, First Floor,
                              Phase 1 Mount Poonamallee, Trunk Road,
                              Porur, Chennai, Tamil Nadu - 600116</p>
                          </div>
                          <div className="d-flex align-items-center mb-4">
                            <div class="icon mb-2">
                              <i class="icon-Headphone"></i>
                            </div>
                            <p className='mx-3'>
                              +91 9159-333-334<br />
                              +91 9786-400-004
                            </p>
                          </div>

                          <div className="d-flex align-items-center mb-4">
                            <div class="icon mb-2">
                              <i class="icon-mail-open-line"></i>
                            </div>
                            <p className='mx-3'>
                              info@aimoretechnologies.com
                            </p>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div class="contact-address-card-1 website">
                      <div class="inner">

                        <div class="content">
                          <h1 class="title">Karapakkam-Branch</h1>
                          <div className="d-flex align-items-center mb-4">
                            <div class="icon mb-2">
                              <i class="icon-map-pin-line"></i>
                            </div>
                            <p className='mx-3'>1/16/2, Rajiv Gandhi Road
                              (Old Mahabalipuram Road),
                              Karapakkam(N198), Chennai - 600097</p>
                          </div>
                          <div className="d-flex align-items-center mb-4">
                            <div class="icon mb-2">
                              <i class="icon-Headphone"></i>
                            </div>
                            <p className='mx-3'>
                              +91 9655-333-334<br/>
                              +91 9962-898-898
                            </p>
                          </div>

                          <div className="d-flex align-items-center mb-4">
                            <div class="icon mb-2">
                              <i class="icon-mail-open-line"></i>
                            </div>
                            <p className='mx-3'>
                            info@aimoretechnologies.com
                            </p>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <h1 className='title py-3'>Fill up the details</h1>
               <form onSubmit={sendEmail} ref={form} className='rnt-contact-form rwt-dynamic-form row'>
                    <div className='form-group'>
                        <input type="text" name='contact_name' placeholder='Enter Name' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <input type="email" name='contact_email' placeholder='Enter Email' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <input type="text" name='contact_phone' placeholder='Enter Phone' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <input type="text" name='contact_course' placeholder='Enter Course' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <input type="text" name='contact_message' placeholder='Enter Message' className='form-control'/>
                    </div>
                    <div className='form-group' style={{display:"none"}}>
                        <input value={urls} type="text" name='contact_url' placeholder='Enter URL' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary rn-btn edu-btn w-100'>SUBMIT</button>
                    </div>
               </form>
               <h4>{message}</h4>
            </div>
          </div>

          <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
            <div class="shape-image scene shape-image-1" >
              <span data-depth="-2.2" >
                <img src="assets/images/shapes/shape-04-01.png" alt="Shape Thumb" />
              </span>
            </div>
            <div class="shape-image shape-image-2">
              <img src="assets/images/shapes/shape-02-08.png" alt="Shape Thumb" />
            </div>
            <div class="shape-image shape-image-3">
              <img src="assets/images/shapes/shape-15.png" alt="Shape Thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
