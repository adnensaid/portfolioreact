import React, { Component } from 'react';
import Style from './asideleft.module.scss';
import Arrow from './arrow/Arrow';
import Socials from './socials/Socials';
export default class AsideLeft extends Component{
  render(){
    let content;
    if(this.props.location.pathname === "/about"){
      content = (
        <Socials />
      );
    }else if(this.props.location.pathname === "/portfolio"){
      content =(
          <Arrow
          title = "about" 
          to="/about" 
          startStopAnimationArrowLeft = { this.props.startStopAnimationArrowLeft } 
          classNameArrowLeft = { this.props.classNameArrowLeft }
          classNameArrowRight = { this.props.classNameArrowRight }
          onAnimationStart = { this.props.onAnimationStart }
          onAnimationEnd = { this.props.onAnimationEnd }
          />   
      );
    }else if(this.props.location.pathname === "/labs"){
      content = (
        <Arrow 
        title = "portfolio" to="/portfolio" 
        startStopAnimationArrowLeft = { this.props.startStopAnimationArrowLeft }  
        classNameArrowLeft = { this.props.classNameArrowLeft }
        classNameArrowRight = { this.props.classNameArrowRight }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }  
        />   
      )
    }else if(this.props.location.pathname === "/contact"){
      content = (
        <Arrow 
        title = "labs" 
        to="/labs" 
        startStopAnimationArrowLeft = { this.props.startStopAnimationArrowLeft } 
        classNameArrowLeft = { this.props.classNameArrowLeft }
        classNameArrowRight = { this.props.classNameArrowRight }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }
        />    
      )
    }else if(this.props.location.pathname === "/field-array"){
      content = (
        <Arrow 
        title = "labs" 
        to="/labs" 
        startStopAnimationArrowLeft = { this.props.startStopAnimationArrowLeft } 
        classNameArrowLeft = { this.props.classNameArrowLeft }
        classNameArrowRight = { this.props.classNameArrowRight }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }
        />    
      )
    }
    else if(this.props.location.pathname === "/form-validation"){
      content = (
        <Arrow 
        title = "fieldArray" 
        to="/field-array" 
        startStopAnimationArrowLeft = { this.props.startStopAnimationArrowLeft } 
        classNameArrowLeft = { this.props.classNameArrowLeft }
        classNameArrowRight = { this.props.classNameArrowRight }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }
        />    
      )
    }else if(this.props.location.pathname === "/labs-cube"){
      content = (
        <Arrow 
        title = "form validation" 
        to="/form-validation" 
        startStopAnimationArrowLeft = { this.props.startStopAnimationArrowLeft } 
        classNameArrowLeft = { this.props.classNameArrowLeft }
        classNameArrowRight = { this.props.classNameArrowRight }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }
        />    
      )
    }else if(this.props.location.pathname === "/progress-animation"){
      content = (
          <Arrow 
          title = "heros" to="/labs-cube" 
          startStopAnimationArrowLeft = { this.props.startStopAnimationArrowLeft } 
          classNameArrowLeft = { this.props.classNameArrowLeft }
          classNameArrowRight = { this.props.classNameArrowRight }
          onAnimationStart = { this.props.onAnimationStart }
          onAnimationEnd = { this.props.onAnimationEnd }  
          />    
      )
    }else if(this.props.location.pathname === "/socials-animation"){
      content = (
        <Arrow  
        title = "progress" to="/progress-animation" 
        startStopAnimationArrowLeft = { this.props.startStopAnimationArrowLeft } 
        classNameArrowLeft = { this.props.classNameArrowLeft }
        classNameArrowRight = { this.props.classNameArrowRight }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }  
        />    
      )
    }else if(this.props.location.pathname === "/montre"){
      content = (
        <Arrow 
        title = "socials" 
        to="/socials-animation" 
        startStopAnimationArrowLeft = { this.props.startStopAnimationArrowLeft } 
        classNameArrowLeft = { this.props.classNameArrowLeft }
        classNameArrowRight = { this.props.classNameArrowRight }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }  
        />    
      )
    }else if(this.props.location.pathname === "/arrow-animation"){
      content = (
        <Arrow 
        title = "montre" 
        to="/montre" 
        startStopAnimationArrowLeft = { this.props.startStopAnimationArrowLeft } 
        classNameArrowLeft = { this.props.classNameArrowLeft }
        classNameArrowRight = { this.props.classNameArrowRight }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }  
        />    
 
      )
    }else{
      content = null
    }
    return(
      <div className={ Style.asideLeft }>
        { content }
      </div>
    )
  }
}