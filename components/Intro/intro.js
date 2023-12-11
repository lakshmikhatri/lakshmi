import React from 'react';
import './intro.css';
import bg from '../../assests/image.png';
import btnImg from '../../assests/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introtext">I'm <span className="introName">Lakshmi</span><br/>Front End Developer</span>
        <p className="introPara">Highly motivated and enthusiastic recent<br/> graduate
         seeking an entry-level position <br/>in Frontend Development to apply academic <br/>
         knowledge,gain practical experience, and <br/>contribute to the success of the<br/> 
         organization.</p>
       <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>

    </div>
    <img src={bg} alt="profile" className="bg"/>
   </section>
  );
}

export default Intro
