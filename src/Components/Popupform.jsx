import React, {  useLayoutEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
function Popupform() {
  const form = useRef()
  const [urls, setUrls] = useState("")  
  const [message, setMessage] = useState("");
 
 useLayoutEffect(()=>{
    setUrls(window.location.href)
 })
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
 
 

      <div class="edu-contact-us-area eduvibe-contact-us bg-color-white">
        <div class="container eduvibe-animated-shape">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                <h3 class="title">Get In Touch With us</h3>
              </div>
            </div>
          </div>
          <div class="row g-5">
        
            <div class="col-lg-12">
           
               <form onSubmit={sendEmail} ref={form} className='rnt-contact-form rwt-dynamic-form row'>
                    <div className='form-group'>
                        <input type="text" name='contact_name' placeholder='Enter Name' className='form-control' required/>
                    </div>
                    <div className='form-group'>
                        <input type="email" name='contact_email' placeholder='Enter Email' className='form-control' required/>
                    </div>
                    <div className='form-group'>
                        <input type="text" name='contact_phone' placeholder='Enter Phone' className='form-control' required/>
                    </div>
                    <div className='form-group'>
                        <input type="text" name='contact_course' placeholder='Enter Course' className='form-control' required/>
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

    
        </div>
      </div>
    </div>
  )
}

export default Popupform
