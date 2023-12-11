import React from 'react'
import './Skills.css';
import  HTML5 from '../../assests/html5.png';
import CSS3  from '../../assests/css3.png';
import BootStrap from '../../assests/bootstrap1.png';
import JavaScript from '../../assests/javascript.png';
import TypeScript from '../../assests/typescript1.png';
import Reactjs from '../../assests/react.png';

const Skill = () => {
  return (
    <section id='skills'>
      <span className='SkillTitle'>What I do</span>
      <span className='SkillDesc'>Highly motivated and enthusiastic recent graduate
         seeking an entry-level position in Frontend Development to apply academic 
         knowledge,gain practical experience, and contribute to the success of the 
         organization.</span>
         <div className='skillBars'>
         <div className='skillBar'>
            <img src={HTML5} alt="html5" className='skillBarImg'/>
            <div className="skillBarText ">
              <h2>HTML5</h2>
              <p>Heading tags,Text-formatting tags,,lists,tables,forms,Semantic Elements,,button,iframe,audio,video,
                header,footer,mark,caption.
                     
             </p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={CSS3} alt="css3" className='skillBarImg'/>
            <div className="skillBarText ">
              <h2>CSS3</h2>
              <p>Selectors,Text Properties,Box Model,position,units,Flex box,Media Queries,Transitions,Transform properties.
              </p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={BootStrap} alt="bootstrap" className='skillBarImg'/>
            <div className="skillBarText ">
              <h2>BOOTSTRAP</h2>
              <p> Navbar,carousel,card,form,table,Alert,badge,list,nav</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={JavaScript} alt="javascript"className='skillBarImg'/>
            <div className="skillBarText ">
              <h2>JAVASCRIPT</h2>
              <p> I have a knowledge in Advance javascript like Array,Controlstatement,FatArrow.Modern Javascript like Asynchronous,callBackHell,Closure,EvenPropagation,HOF,Hoistiong,Lexical,Promise,</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={TypeScript} alt="typescript" className='skillBarImg'/>
            <div className="skillBarText ">
              <h2>TYPESCRIPT</h2>
              <p>Array,functions,Filter and Map, Iteration over Elements,Type Annotation,Type Inference.
              </p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={Reactjs} alt="react" className='skillBarImg'/>
            <div className="skillBarText ">
              <h2>REACTJS</h2>
              <p>Components,Props,States,Event Handling,Component Life Cycle Methods,Memo,rEfs,Pure Component,
                Higher Order Components,React Hooks</p>
            </div>
          </div>

         </div>
      
    </section>

  )
}

export default Skill