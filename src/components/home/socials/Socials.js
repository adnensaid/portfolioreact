import React, { Component } from 'react';
import Style from './socials.module.scss';
//+" "+this.props.classNameArrowRight ? this.props.classNameArrowRight[4] : '' 
export default  class Socials extends Component{
  render(){
    return(
      <div 
      className={ Style.socials }
      >
        <div className="container">
          <div className={ Style.socialsContent }>
            <div className={ Style.socialsElem }>
              <div className={ Style.queu }></div>
              <a 
              className={ Style.socialsElemImg }
              href="https://github.com/adnensaid"
              >
               <i className="fab fa-github-alt"></i>
              </a>
            </div>
    
            <div className={ Style.socialsElem }>
              <div className={ Style.queu }></div>
              <a 
              href="https://www.linkedin.com/in/adnensaid83/"
              className={ Style.socialsElemImg }
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
    
            <div className={ Style.socialsElem }>
              <div className={ Style.queu }></div>
              <a 
              className={ Style.socialsElemImg }
              href="https://www.facebook.com/adnenso/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>    
    )        
  }
}