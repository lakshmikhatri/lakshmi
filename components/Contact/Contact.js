import React,{useRef} from 'react';
import './Contact.css';
import heeddata  from '../../assests/heeddata.png';
import facebookicon from '../../assests/facebook-icon.png'
import twitter from '../../assests/twitter.png';
import youtube from '../../assests/youtube.png';
import instagram from '../../assests/instagram.png';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9xg445l', 'template_v7c4cgg', form.current, 'tkIaZhSRg_8kagfIm')
      .then((result) => {
           console.log(result.text);
           e.target.reset();
           alert('Email sent!');
           
      }, (error) => {
           console.log(error.text);
      });
  };
  return (
   <section className='ContactPage'>
   
    <div className='clients'>
        <h1 className='ContactPageTitle'>My Clients</h1>
        <p className="ClientsDesc">
            I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies I have worked with includes.
        </p>
        <div className='clientImgs'>
            <img  src={heeddata} alt="" className='clientImg'/>
        </div>

    </div>
    <div id="contact">
      <h1 className='ContactpageTitle'>Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
      <form className='contactform' ref={form} onSubmit={sendEmail}>
       <input type="text" className="name" placeholder="your_name"name="Lakshmi Khatri"/>
       <input type="email" className="email" placeholder="your_email" name="lakshmikhatri02@gmail.com"/>
       <textarea  className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
       <button type="submit" value="send" className="submitBtn">Submit</button>
       <div className='links'>
        <img src={facebookicon} alt='Facebook-Icon' className="link"/>
        <img src={twitter} alt='twitter' className="link"/>
        <img src={instagram} alt='Instagram' className="link"/>
        <img src={youtube} alt='youtube' className="link"/>
       </div>
      </form>
    </div>
    </section>
  )
}

export default Contact