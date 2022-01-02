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
              <h1 className={ Style.title }>
                <p>DÉVELOPPEUR</p> 
                <p> FULL-STACK </p>
              </h1>
              <span className="underline"></span>
              <p className={ Style.text }>
                Vous voulez voir ma dernière application <strong>REACTJS, </strong>
                ou savoir plus sur mon parcours, je vous invite à suivre les liens ci-dessous.
              </p>
              <div className={ Style.lienUtiles}>
                <button className="btnPrimary shadow-lg text-nowrap">Parcours</button>
                <button className="btnSecondary shadow-lg text-nowrap"><a href="https://youthful-noyce-04c1bb.netlify.app" target="_blank" rel="noreferrer" >Last React app</a></button>    
              </div>       
            </div>     
          </div>
        </div>
{/*         <span href="#" className={ Style.arrow }>
          <span>Contact</span>
          <i className="fas fa-arrow-circle-right"></i>
        </span>    */} 
      </div>
    )
  }
}