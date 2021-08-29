import React, { Component } from 'react';
import Style from './socials.module.scss';
export default  class Socials extends Component{
  render(){
    return(
      <div className={ Style.socials }>
        <div className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <div className={ Style.socialsElemImg }>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div href="#" className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <div className={ Style.socialsElemImg }>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div href="#" className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <div className={ Style.socialsElemImg }>
            <i className="fab fa-github"></i>
          </div>
        </div>
        <div href="#" className={ Style.socialsElem }>
          <div className={ Style.queu }></div>
          <div className={ Style.socialsElemImg }>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>    
    )        
  }
}