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
        { ...this.props }
         />
      )
    }else if(this.props.location.pathname === "/portfolio"){
      content = (
        <Arrow
        title = "labs" 
        to="/labs" 
        {...this.props}
        />
      )
    }else if(this.props.location.pathname === "/labs"){
      content = (
        <Arrow  
        title = "contact"
        to="/contact" 
        {...this.props}
        />
      )
    }else if(this.props.location.pathname === "/field-array"){
      content = (
        <Arrow  
        title = "validation"
        to="/form-validation" 
        {...this.props}
        />
      )
    }
    else if(this.props.location.pathname === "/form-validation"){
      content = (
        <Arrow  
        title = "cube"
        to="/labs-cube" 
        {...this.props}
        />
      )
    }
    else if(this.props.location.pathname === "/labs-cube"){
      content = (
        <Arrow 
        title = "progress" 
        to="/progress-animation" 
        {...this.props}

        />   
      )
    }else if(this.props.location.pathname === "/progress-animation"){
      content = (
        <Arrow 
        title = "socials" 
        to="/socials-animation" 
        {...this.props}
        />   
      )
    }else if(this.props.location.pathname === "/socials-animation"){
      content = (
        <Arrow 
        title = "montre" 
        to="/montre" 
        {...this.props}
        />   
      )
    }else if(this.props.location.pathname === "/montre"){
      content = (
        <Arrow 
        title = "arrow" 
        to="/arrow-animation" 
        { ...this.props }
        />   
      )
    }else if(this.props.location.pathname === "/arrow-animation"){
      content = (
        <Arrow 
        title = "contact" 
        to="/contact" 
        { ...this.props }
        />   
      )
    }else{
      content = null
    }
    return(
      this.props.location.pathname !== '/about' ? (
        <div className={ Style.asideRight } style={{ background:'black' }}>
        { content }  
      </div>    
      ) : (
        <div className={ Style.asideRight } >
        { content }  
      </div>
      )
    )
  }
}

