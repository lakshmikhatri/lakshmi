import React from 'react';
import './works.css';
import Portfolio1 from '../../assests/portfolio-1.png';
import Portfolio2 from '../../assests/portfolio-2.png';
import Portfolio3 from '../../assests/portfolio-3.png';
import Portfolio4 from '../../assests/portfolio-4.png';
import Portfolio5 from '../../assests/portfolio-5.png';
import Portfolio6 from '../../assests/portfolio-6.png';
const works = () => {
  return (
    <section id="works">
       <h2 className="WorksTitle">My Portfolio</h2>
      <span className="WorkDesc">I take pride in taking attention to the smallest details
       and making sure my work is pixel perfect.I am excited to bring my skills and experience
        to help the business achieve the goals and create  a strong online presence</span>
    <div className="worksImg">
        <img src={Portfolio1} alt="" className="workImg"/>
        <img src={Portfolio2} alt="" className="workImg"/>
        <img src={Portfolio3} alt="" className="workImg"/>
        <img src={Portfolio4} alt="" className="workImg"/>
        <img src={Portfolio5} alt="" className="workImg"/>
        <img src={Portfolio6} alt="" className="workImg"/>
        
    </div>
    <button className="workBtn">see more</button>
    </section>
  )
}

export default works
