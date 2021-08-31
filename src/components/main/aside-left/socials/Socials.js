import React, { Component } from 'react';
import Style from './socials.module.scss';
export default  class Socials extends Component{
  render(){
    return(
      <div className={ Style.socials }>
        <div className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <a 
          href="https://www.linkedin.com/in/adnensaid83/"
          target="_blank"
          rel="noreferrer"
          className={ Style.socialsElemImg }
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <a 
          href="https://www.instagram.com/adnen.said/"
          target="_blank"
          rel="noreferrer"
          className={ Style.socialsElemImg }>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <a 
          className={ Style.socialsElemImg }
          href="https://github.com/adnensaid"
          target="_blank"
          rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <a 
          className={ Style.socialsElemImg }
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>    
    )        
  }
}