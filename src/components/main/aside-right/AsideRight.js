import React, { Component } from 'react';
import Arrow from './arrow/Arrow';
import Style from './asideright.module.scss';
export default class AsideRight extends Component{
  render(){
    let content;
    if(this.props.location.pathname === "/about"){
      content = (
        <Arrow  
        title = "portfolio"
        to="/portfolio"
        startStopAnimationArrowRight = { this.props.startStopAnimationArrowRight } 
        classNameArrowRight = { this.props.classNameArrowRight }
        classNameArrowLeft = { this.props.classNameArrowLeft }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }
         />
      )
    }else if(this.props.location.pathname === "/portfolio"){
      content = (
        <Arrow
        title = "labs" 
        to="/labs" 
        startStopAnimationArrowRight = { this.props.startStopAnimationArrowRight }  
        classNameArrowRight = { this.props.classNameArrowRight }
        classNameArrowLeft = { this.props.classNameArrowLeft }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd } 

        />
      )
    }else if(this.props.location.pathname === "/labs"){
      content = (
        <Arrow  
        title = "contact"
        to="/contact" 
        startStopAnimationArrowRight = { this.props.startStopAnimationArrowRight }  
        classNameArrowRight = { this.props.classNameArrowRight }
        classNameArrowLeft = { this.props.classNameArrowLeft }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }  

        />
      )
    }else if(this.props.location.pathname === "/field-array"){
      content = (
        <Arrow  
        title = "formValidation"
        to="/form-validation" 
        startStopAnimationArrowRight = { this.props.startStopAnimationArrowRight }  
        classNameArrowRight = { this.props.classNameArrowRight }
        classNameArrowLeft = { this.props.classNameArrowLeft }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }  

        />
      )
    }
    else if(this.props.location.pathname === "/form-validation"){
      content = (
        <Arrow  
        title = "labs-cube"
        to="/labs-cube" 
        startStopAnimationArrowRight = { this.props.startStopAnimationArrowRight }  
        classNameArrowRight = { this.props.classNameArrowRight }
        classNameArrowLeft = { this.props.classNameArrowLeft }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }  

        />
      )
    }
    else if(this.props.location.pathname === "/labs-cube"){
      content = (
        <Arrow 
        title = "progress" 
        to="/progress-animation" 
        startStopAnimationArrowRight = { this.props.startStopAnimationArrowRight }  
        classNameArrowRight = { this.props.classNameArrowRight }
        classNameArrowLeft = { this.props.classNameArrowLeft }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }  

        />   
      )
    }else if(this.props.location.pathname === "/progress-animation"){
      content = (
        <Arrow 
        title = "socials" 
        to="/socials-animation" 
        startStopAnimationArrowRight = { this.props.startStopAnimationArrowRight } 
        classNameArrowRight = { this.props.classNameArrowRight }
        classNameArrowLeft = { this.props.classNameArrowLeft }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }  

        />   
      )
    }else if(this.props.location.pathname === "/socials-animation"){
      content = (
        <Arrow 
        title = "montre" 
        to="/montre" 
        startStopAnimationArrowRight = { this.props.startStopAnimationArrowRight } 
        classNameArrowRight = { this.props.classNameArrowRight }
        classNameArrowLeft = { this.props.classNameArrowLeft }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }  

        />   
      )
    }else if(this.props.location.pathname === "/montre"){
      content = (
        <Arrow 
        title = "arrow" 
        to="/arrow-animation" 
        startStopAnimationArrowRight = { this.props.startStopAnimationArrowRight } 
        classNameArrowRight = { this.props.classNameArrowRight }
        classNameArrowLeft = { this.props.classNameArrowLeft }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd } 

        />   
      )
    }else if(this.props.location.pathname === "/arrow-animation"){
      content = (
        <Arrow 
        title = "contact" 
        to="/contact" 
        startStopAnimationArrowRight = { this.props.startStopAnimationArrowRight }  
        classNameArrowRight = { this.props.classNameArrowRight }
        classNameArrowLeft = { this.props.classNameArrowLeft }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd } 

        />   
      )
    }else{
      content = null
    }
    return(
      <div className={ Style.asideRight }>
        { content }  
      </div>
    )
  }
}

