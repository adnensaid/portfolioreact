import React, { Component } from 'react';
import Style from './home.module.scss';
import Socials from './socials/Socials';
export default class Home extends Component{
  render(){
    return(
      <div className={ Style.about }>
        <div className={ Style.filter }></div>
        <Socials />
        <div className={ Style.intro}>
          <div className="container">
            <div className={ Style.introContent }>
              <h1 className={ Style.title }> Développeur <strong> Full-stack </strong></h1>
              <span className="underline"></span>
              <p className={ Style.text }>
                Je vous invite à voir ma dernière application <strong>REACTJS, </strong>
                mon parcours professionnel.
              </p>
              <div className={ Style.lienUtiles}>
                <button id="btn-primary" className="btn btn-primary shadow-lg text-nowrap">Parcours</button>
                <button id="btn-secondary" className="btn btn-secondary shadow-lg text-nowrap"><a href="https://youthful-noyce-04c1bb.netlify.app" target="_blank" rel="noreferrer" >Last React app</a></button>    
              </div>       
            </div>     
          </div>
        </div>
        <span href="#" className={ Style.arrow }>
          <span>Contact</span>
          <i className="fas fa-arrow-circle-right"></i>
        </span>    
      </div>
    )
  }
}